/**
 * Variables we need to create the environment
 *
 * Created December 17th, 2021
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

variable "env_name" {
  type        = string
  description = "dev/prod/staging..."
}

variable "org_id" {
  description = "The id of the organization"
  type        = string
  default     = "701515151774"
}

variable "billing_account" {
  description = "Billing accound of the infastructure"
  type        = string
  default     = "01187F-6BAFD6-F8EE32"
}

variable "env_options" {
  type = object({
    budget_amount              = number
  })
  description = "Environment configuration object"
}

