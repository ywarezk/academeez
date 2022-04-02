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
resource "google_secret_manager_secret" "cm_api_pg_username" {
  // secrets that are shared between environments will be located in the common project
  project   = var.project_common

  secret_id = "github-token"
  replication {
    automatic = true
  }
}
