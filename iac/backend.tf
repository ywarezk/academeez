/**
 * Set the backend where we store the tfstate to be a bucket
 *
 * Created August 26th, 2021
 * @author: ywarezk
 * @copyright: yellowHEAD LTD
 * @version: 0.1.0
 */

terraform {
  backend "gcs" {
    bucket = "bkt-academeez-tf-state"
    prefix = "terraform/state"
  }
}
