/**
 * Infastructure needed for the api lessons will be described here
 *
 * Created April 2nd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

/**
 * Create a secret that will hold the github token
 */
resource "google_secret_manager_secret" "token_github" {
  // secrets that are shared between environments will be located in the common project
  project = var.project

  secret_id = "github-token"
  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret_version" "token_github_1" {
  secret      = google_secret_manager_secret.token_github.id
  secret_data = var.token_github
}

/**
 * Create a service account for the cloud function api
 */
resource "google_service_account" "sa_api_lessons" {
  project      = var.project
  account_id   = "sa-api-lessons"
  display_name = "Service account for the lessons api"
}

/**
 * service account can access the github token secret
 */
resource "google_secret_manager_secret_iam_member" "allow_read_github_token" {
  project   = var.project
  secret_id = google_secret_manager_secret.token_github.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.sa_api_lessons.email}"
}

/**
 * service account for github actions can access the github token secret
 */
resource "google_secret_manager_secret_iam_member" "allow_read_ga_github_token" {
  project   = var.project
  secret_id = google_secret_manager_secret.token_github.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.sa_github_actions}"
}

/**
 * allow github actions to publish cloud functions
 */
resource "google_cloudfunctions_function_iam_member" "allow_cloud_function_github_actions_sa1" {
  project        = var.project
  cloud_function = "api"
  region         = var.region
  role           = "roles/cloudfunctions.developer"
  member         = "serviceAccount:${var.sa_github_actions}"
}

resource "google_project_iam_member" "allow_cloud_function_github_actions_sa2" {
  project = var.project
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${var.sa_github_actions}"
}

/**
 * add a cname for cloud functions
 */
resource "google_dns_record_set" "cname" {
  project      = var.project
  name         = "www.academeez.com."
  managed_zone = "academeez"
  type         = "CNAME"
  ttl          = 300
  rrdatas      = ["us-central1-prj-academeez.cloudfunctions.net."]
}
