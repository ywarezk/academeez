/**
 * Define the main variables here
 *
 * Created August 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 */

variable "region" {
  description = "The region where the infastructure will be"
  type        = string
}

variable "org_id" {
  description = "The id of the organization"
  type        = string
}

variable "billing_account" {
  description = "Billing accound of the infastructure"
  type        = string
}

variable "environments" {
  description = "Environments object"
  type        = map(any)
  default = {
    dev = {
      budget_amount              = 100
    }
  }
}

variable "sa_terraform" {
  type = string
  description = "The service account of terraform"
}
