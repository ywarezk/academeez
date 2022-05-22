/**
 * Variables needed for creating our CDN
 *
 * Created November 12th, 2021
 * @author: ywarezk
 * @version: 0.6.0
 */

variable "project" {
  description = "Academeez project"
  type = string
}

variable "sa_github_actions" {
  description = "Github actions service account"
  type = string
}
