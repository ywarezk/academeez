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
  project   = var.project_common

  secret_id = "github-token"
  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret_version" "token_github_1" {
  secret = google_secret_manager_secret.token_github.id
  secret_data = var.token_github
}

/**
 * Create a service account for the cloud function
 */
resource "google_service_account" "sa_api_lessons" {
  count        = length(var.projects)
  project      = var.projects[count.index]
  account_id   = "sa-api-lessons"
  display_name = "Service account for the lessons api"
}

/**
 * service account can access the github token secret
 */
resource "google_secret_manager_secret_iam_member" "allow_read_github_token" {
  count     = length(var.projects)
  project   = var.projects[count.index]
  secret_id = google_secret_manager_secret.token_github.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.sa_api_lessons[count.index].email}"
}
