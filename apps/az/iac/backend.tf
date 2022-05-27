/**
 * Saving the terraform state in a bucket
 *
 * Created April 2nd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

terraform {
  backend "gcs" {
    bucket = "bkt-az-tf-state"
    prefix = "terraform/az"
  }
}
