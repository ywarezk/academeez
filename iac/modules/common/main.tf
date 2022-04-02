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
    "serviceAccount:sa-nerdeez-terraform@prj-nerdeez-common-d528.iam.gserviceaccount.com"
  ]
}
