/**
 * Represents a single environment in academeez: dev/prod...
 *
 * Created December 17th, 2021
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

/**
 * Create the folder where all the environments are placed
 */
module "env_folder" {
  source  = "terraform-google-modules/folders/google"
  parent  = "folders/1086752552277" # parent is always the root folder
  names = [
    var.env_name # dev/prod/...
  ]
}

/**
 * Create a project for the environment
 */
module "env_project" {
  source                      = "terraform-google-modules/project-factory/google"
  name                        = "prj-academeez-${var.env_name}"
  random_project_id           = true
  disable_services_on_destroy = false
  folder_id                   = module.env_folder.id
  org_id                      = var.org_id
  billing_account             = var.billing_account
  budget_amount               = var.env_options["budget_amount"]
  create_project_sa           = false
  activate_apis               = [
    "billingbudgets.googleapis.com",
    "serviceusage.googleapis.com",
    "cloudidentity.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "container.googleapis.com",
    "cloudbuild.googleapis.com"
  ]
  labels                      = {
    environment       = var.env_name
    application_name  = "academeez"
    env_code          = "e"
  }
}

