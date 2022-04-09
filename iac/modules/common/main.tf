/**
 * Entry point for bootstrap module
 *
 * Created August 20th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

/**
 * Create a bootstrap folder
 */
module "common_folder" {
  source  = "terraform-google-modules/folders/google"
  parent  = var.parent_folder
  names = [ "common" ]
}

/**
 * Create the project that will hold ci
 */
module "common_project" {
  source                      = "terraform-google-modules/project-factory/google"
  name                        = "prj-academeez-common"
  random_project_id           = true
  disable_services_on_destroy = false
  folder_id                   = module.common_folder.id
  org_id                      = var.org_id
  billing_account             = var.billing_account
  create_project_sa           = false
  activate_apis               = [
    "secretmanager.googleapis.com",
    "iam.googleapis.com",
    "cloudidentity.googleapis.com",
    "iamcredentials.googleapis.com"
  ]
  labels                      = {
    environment       = "bootstrap"
    application_name  = "academeez"
    billing_code      = "1235"
    business_code     = "abce"
    env_code          = "b"
  }
}

/**
 * the terraform state will be placed in this private bucket
 */
resource "google_storage_bucket" "tf_state_bucket" {
  name          = "bkt-academeez-tf-state"
  location      = "US"
  project       = module.common_project.project_id
}

/**
 * the terraform service account can access the bucket
 */
resource "google_storage_bucket_iam_binding" "terraform_sa_allow_bucket" {
  bucket = google_storage_bucket.tf_state_bucket.name
  role = "roles/storage.admin"
  members = [
    "serviceAccount:${var.sa_terraform}"
  ]
}

/**
 * pool of external workload identity that is used by github actions
 */
resource "google_iam_workload_identity_pool" "workload_identity_github_actions" {
  provider                           = google-beta
  project                   = module.common_project.project_id
  workload_identity_pool_id = "pool-github-actions"
  display_name              = "WI github actions"
  description               = "Workload Identity pool for github actions"
}

resource "google_iam_workload_identity_pool_provider" "oidc_github_actions" {
  provider                           = google-beta
  project                            = module.common_project.project_id
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
  project      = module.common_project.project_id
  account_id   = "sa-github-actions"
  display_name = "Service account for github actions"
}

resource "google_service_account_iam_member" "sa_wi" {
  service_account_id = google_service_account.sa_github_actions.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.workload_identity_github_actions.name}/attribute.repository/ywarezk/academeez"
}

output "project" {
  value = module.common_project.project_id
}
