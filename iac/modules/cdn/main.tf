/**
 * this module will create a storage bucket and a cdn pointing to that bucket
 *
 * Created November 12th, 2021
 * @author: ywarezk
 * @version: 0.6.0
 */

resource "google_storage_bucket" "cdn_az_bucket" {
  name          = "bkt-az-cdn"
  storage_class = "MULTI_REGIONAL"
  location      = "US"
  project       = var.project
  cors {
    origin          = [
      "https://www.academeez.com"
    ]
    method          = ["GET"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }
}

resource "google_compute_backend_bucket" "cdn_backend_az_bucket" {
  name        = "cdn-backend-az-bucket"
  description = "Backend bucket for serving static content through CDN"
  bucket_name = google_storage_bucket.cdn_az_bucket.name
  enable_cdn  = true
  project     = var.project
}

resource "google_compute_url_map" "cdn_az_url_map" {
  name            = "cdn-az-url-map"
  description     = "CDN URL map to cdn_az_backend_bucket"
  default_service = google_compute_backend_bucket.cdn_backend_az_bucket.self_link
  project         = var.project
}

resource "google_compute_managed_ssl_certificate" "cdn_az_certificate" {
  project  = var.project

  name = "cdn-az-managed-certificate"

  managed {
    domains = ["cdn.academeez.com"]
  }
}

resource "google_compute_target_https_proxy" "cdn_az_https_proxy" {
  name             = "cdn-az-https-proxy"
  url_map          = google_compute_url_map.cdn_az_url_map.self_link
  ssl_certificates = [google_compute_managed_ssl_certificate.cdn_az_certificate.self_link]
  project          = var.project
}

resource "google_compute_global_address" "cdn_az_public_address" {
  name         = "cdn-az-public-address"
  ip_version   = "IPV4"
  address_type = "EXTERNAL"
  project      = var.project
}

resource "google_compute_global_forwarding_rule" "cdn_az_global_forwarding_rule" {
  name       = "cdn-az-global-forwarding-https-rule"
  target     = google_compute_target_https_proxy.cdn_az_https_proxy.self_link
  ip_address = google_compute_global_address.cdn_az_public_address.address
  port_range = "443"
  project    = var.project
}

resource "google_dns_record_set" "cdn_az_dns_a_record" {
  managed_zone = "academeez"
  name         = "cdn.academeez.com."
  type         = "A"
  ttl          = 3600 # 1 hour
  rrdatas      = [google_compute_global_address.cdn_az_public_address.address]
  project      = var.project
}

resource "google_storage_bucket_iam_member" "all_users_viewers" {
  bucket = google_storage_bucket.cdn_az_bucket.name
  role   = "roles/storage.legacyObjectReader"
  member = "allUsers"
}

/**
 * allow the github service account to upload to the bucket
 */
resource "google_storage_bucket_iam_binding" "sa_ga_allow_upload_cdn" {
  bucket = google_storage_bucket.cdn_az_bucket.name
  role = "roles/storage.admin"
  members = [
    "serviceAccount:${var.sa_github_actions}"
  ]
}
