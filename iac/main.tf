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
  activate_apis               = [
    "billingbudgets.googleapis.com",
    "serviceusage.googleapis.com",
    "cloudidentity.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "container.googleapis.com",
    "cloudbuild.googleapis.com",
    "secretmanager.googleapis.com",
    "iam.googleapis.com",
    "iamcredentials.googleapis.com"
  ]
  labels                      = {
    application_name  = "academeez"
  }
}

/**
 * the terraform state will be placed in this private bucket
 */
resource "google_storage_bucket" "bkt_tf_state" {
  name          = "bkt-az-tf-state"
  location      = "US"
  project       = module.prj_academeez.project_id
}

/**
 * the terraform service account can access the bucket
 */
resource "google_storage_bucket_iam_binding" "terraform_sa_allow_bucket" {
  bucket = google_storage_bucket.bkt_tf_state.name
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
