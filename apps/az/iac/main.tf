/**
 * Infastructure needed for the next az app
 *
 * Created May 25th, 2022
 * @author: ywarezk
 * @version: 0.0.2
 * @license: MIT
 */

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
