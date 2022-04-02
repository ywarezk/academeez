/**
 * represents the json returned from the api-lessons
 *
 * Created April 2nd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

export interface Lesson {
  title: string
  description: string

  // the link is the primary key
  link: string

  videoUrl?: string
  duration?: number
  author: string
  bgImg: string

  // lessons are organized in a tree structure
  children: Lesson[]
}
