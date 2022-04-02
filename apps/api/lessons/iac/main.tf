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

resource "google_secret_manager_secret_iam_member" "allow_read_token_github" {
  project   = var.project_common
  secret_id = google_secret_manager_secret.token_github.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.sa_github_actions}"
}
