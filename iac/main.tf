/**
 * Entry point file for the IAC terraform project
 *
 * Created August 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license MIT
 */

provider "github" {
}

provider "google-beta" {
  region = var.region
}

/**
 * Create the root folder of the project
 */
module "root_folder" {
  source = "terraform-google-modules/folders/google"

  parent = "organizations/${var.org_id}"

  names = ["academeez"]

  # list of admins for a specific folder
  # per_folder_admins = {}

  # these admins will have admin for all the folders and subfolders
  # you can also set a group here
  all_folder_admins = [
    "yariv@nerdeez.com"
  ]
}

module "prj_academeez" {
  source                      = "terraform-google-modules/project-factory/google"
  name                        = "prj-academeez"
  random_project_id           = false
  disable_services_on_destroy = false
  folder_id                   = module.root_folder.id
  org_id                      = var.org_id
  billing_account             = var.billing_account
  budget_amount               = 1000
  create_project_sa           = false
  activate_apis = [
    "billingbudgets.googleapis.com",
    "serviceusage.googleapis.com",
    "cloudidentity.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "container.googleapis.com",
    "cloudbuild.googleapis.com",
    "secretmanager.googleapis.com",
    "iam.googleapis.com",
    "iamcredentials.googleapis.com",
    "cloudfunctions.googleapis.com",
    "dns.googleapis.com"
  ]
  labels = {
    application_name = "academeez"
  }
}

/**
 * the terraform state will be placed in this private bucket
 */
resource "google_storage_bucket" "bkt_tf_state" {
  name     = "bkt-az-tf-state"
  location = "US"
  project  = module.prj_academeez.project_id
}

/**
 * the terraform service account can access the bucket
 */
resource "google_storage_bucket_iam_binding" "terraform_sa_allow_bucket" {
  bucket = google_storage_bucket.bkt_tf_state.name
  role   = "roles/storage.admin"
  members = [
    "serviceAccount:${var.sa_terraform}"
  ]
}

/**
 * pool of external workload identity that is used by github actions
 */
resource "google_iam_workload_identity_pool" "workload_identity_github_actions" {
  provider                  = google-beta
  project                   = module.prj_academeez.project_id
  workload_identity_pool_id = "pool-github-actions"
  display_name              = "WI github actions"
  description               = "Workload Identity pool for github actions"
}

resource "google_iam_workload_identity_pool_provider" "oidc_github_actions" {
  provider                           = google-beta
  project                            = module.prj_academeez.project_id
  workload_identity_pool_id          = google_iam_workload_identity_pool.workload_identity_github_actions.workload_identity_pool_id
  workload_identity_pool_provider_id = "github-oidc"
  attribute_mapping = {
    "google.subject"       = "assertion.sub"
    "attribute.actor"      = "assertion.actor"
    "attribute.repository" = "assertion.repository"
  }
  oidc {
    issuer_uri = "https://token.actions.githubusercontent.com"
  }
}

/**
 * workload identity for github actions
 */
resource "google_service_account" "sa_github_actions" {
  project      = module.prj_academeez.project_id
  account_id   = "sa-github-actions"
  display_name = "Service account for github actions"
}

resource "google_service_account_iam_member" "sa_wi" {
  service_account_id = google_service_account.sa_github_actions.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.workload_identity_github_actions.name}/attribute.repository/ywarezk/academeez"
}

/**
 * Install the cdn
 */
module "cdn_az" {
  source            = "./modules/cdn"
  project           = module.prj_academeez.project_id
  sa_github_actions = google_service_account.sa_github_actions.email
}

/******************************
 * Serverless url map
 ******************************/

/**
 * create an ssl certificate for the main domain
 */
resource "google_compute_managed_ssl_certificate" "az_certificate" {
  project = module.prj_academeez.project_id

  name = "az-managed-certificate"

  managed {
    domains = ["www.academeez.com"]
  }
}

/**
 * Create a static ip for load balancer which will point to cloud function
 */
resource "google_compute_global_address" "ip_main_load_balancer" {
  project      = module.prj_academeez.project_id
  name         = "ip-main-lb"
  ip_version   = "IPV4"
  address_type = "EXTERNAL"
}

/**
 * This can be used for load balaner to map to the api cloud function
 */
resource "google_compute_region_network_endpoint_group" "neg_cloudfunction_api" {
  project               = module.prj_academeez.project_id
  name                  = "neg-cloudfunction-api"
  network_endpoint_type = "SERVERLESS"
  region                = var.region
  cloud_function {
    function = "api"
  }
}

/**
 * backend service for the url map to route to serverless cloud function
 */
resource "google_compute_backend_service" "backend_lb_main" {
  name        = "backend-lb-main"
  project     = module.prj_academeez.project_id
  protocol    = "HTTP"
  port_name   = "http"
  timeout_sec = 30

  backend {
    group = google_compute_region_network_endpoint_group.neg_cloudfunction_api.id
  }
}

resource "google_compute_backend_bucket" "cdn_backend_az_bucket" {
  name        = "backend-az-bucket"
  description = "Backend bucket for main routing"
  bucket_name = "bkt-az-cdn"
  enable_cdn  = true
  project     = module.prj_academeez.project_id
}

/**
 * our reverse proxy configurations
 */
resource "google_compute_url_map" "urlmap_az" {
  name            = "url-map-az"
  description     = "Main url map for academeez routes"
  project         = module.prj_academeez.project_id

  default_url_redirect {
    https_redirect = true
    strip_query = false
    host_redirect = "www.academeez.com"
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
  }

  host_rule {
    hosts        = ["www.academeez.com"]
    path_matcher = "api"
    description  = "Used to route for the api"
  }

  path_matcher {
    name            = "api"
    default_service = google_compute_backend_bucket.cdn_backend_az_bucket.id
    path_rule {
      paths   = ["/api/*"]
      service = google_compute_backend_service.backend_lb_main.id

    }
  }

  host_rule {
    hosts        = ["academeez.com"]
    path_matcher = "redirect"
    description  = "Used to redirect to www"
  }

  path_matcher {
    name = "redirect"
    default_url_redirect {
      host_redirect = "www.academeez.com"
      strip_query = false
      https_redirect = true
    }
  }
}

resource "google_compute_target_https_proxy" "proxy_https" {
  project          = module.prj_academeez.project_id
  name             = "proxy-https-az"
  url_map          = google_compute_url_map.urlmap_az.name
  ssl_certificates = [google_compute_managed_ssl_certificate.az_certificate.name]
}

resource "google_compute_global_forwarding_rule" "https_az_forward" {
  provider   = google-beta
  project    = module.prj_academeez.project_id
  name       = "https-az-forward"
  target     = google_compute_target_https_proxy.proxy_https.self_link
  ip_address = google_compute_global_address.ip_main_load_balancer.address
  port_range = "443"
  depends_on = [google_compute_global_address.ip_main_load_balancer]
}

resource "google_dns_record_set" "dns_az" {
  project = module.prj_academeez.project_id

  name         = "www.academeez.com."
  type         = "A"
  ttl          = 300
  managed_zone = google_dns_managed_zone.dns_az.name
  rrdatas      = [google_compute_global_address.ip_main_load_balancer.address]
}

resource "google_dns_record_set" "dns_az_no_www" {
  project = module.prj_academeez.project_id

  name         = "academeez.com."
  type         = "A"
  ttl          = 300
  managed_zone = google_dns_managed_zone.dns_az.name
  rrdatas      = [google_compute_global_address.ip_main_load_balancer.address]
}

/***************
 * DNS
 ***************/

/**
 * Create a dns zone
 */
resource "google_dns_managed_zone" "dns_az" {
  name          = "academeez"
  dns_name      = "academeez.com."
  force_destroy = true
  description   = "DNS for academeez"
  labels = {
    application = "academeez"
  }
  project = module.prj_academeez.project_id
}
