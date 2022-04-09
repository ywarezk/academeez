/**
 * Module relating to github actions
 *
 * Created April 9th, 2022
 * @author: ywarezk
 * @license: MIT
 */

/**
 * pool of external workload identity that is used by github actions
 */
resource "google_iam_workload_identity_pool" "workload_identity_github_actions" {
  provider                  = google-beta
  project                   = var.project
  workload_identity_pool_id = "wi-pool-academeez"
  display_name              = "WI az ga pool"
  description               = "Workload Identity pool for github actions in academeez"
}

resource "google_iam_workload_identity_pool_provider" "oidc_github_actions" {
  provider                           = google-beta
  project                            = var.project
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
 * Service account for github actions
 */
resource "google_service_account" "sa_github_actions" {
  project      = var.project
  account_id   = "sa-az-github-actions"
  display_name = "Service account for Academeez github actions"
}

/**
 * set as workload identity
 */
resource "google_service_account_iam_member" "sa_lp_wi" {
  service_account_id = google_service_account.sa_github_actions.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.workload_identity_github_actions.name}/attribute.repository/ywarezk/academeez"
}
