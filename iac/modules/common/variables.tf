/**
 * Variables for the bootstrap module
 *
 * Created August 20th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

variable "parent_folder" {
  description = "The id of the academeez folder"
  type = string
}

variable "org_id" {
  description = "Organization Id"
  type = string
}

variable "billing_account" {
  description = "billing account"
  type = string
}

variable "terraform_admins" {
  description = "List of developers that can modify infastructure"
  type = list
  default = [
    // "yariv@nerdeez.com"
  ]
}
