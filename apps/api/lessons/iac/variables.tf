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

variable "project_common" {
  type = string
  description = "Shared project beween environments"
  default = "prj-academeez-common-1005"
}

variable "sa_github_actions" {
  type = string
  description = "Github actions service account"
  default = "sa-github-actions@prj-academeez-common-1005.iam.gserviceaccount.com"
}
