/**
 * Variables and constants will be placed here
 *
 * Created April 2nd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

variable "token_github" {
  type = string
  description = "We use this token to query github api"
}

variable "project" {
  type = string
  description = "Academeez project"
}

variable "sa_github_actions" {
  type = string
  description = "Github actions service account"
}

variable "region" {
  description = "The region where the infastructure will be"
  type        = string
}
