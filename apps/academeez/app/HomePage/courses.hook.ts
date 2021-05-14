/**
 * Get the list of courses
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { gql, useQuery } from "@apollo/client";
import { EducationItem } from '@academeez/entities';
import { MockedResponse } from '@apollo/client/testing';

export const coursesQuery = gql`
  query {
    courses {
      id
      title
      description
      logo
      bgImg
      prerequisites
    }
  }
`

export const mockCourses: MockedResponse = {
  request: {
    query: coursesQuery
  },
  result: {
    data: {
      courses: [
        {
          "id": "f1f8236b2c6b4a2b15bd847311251e712064239f",
          "title": "React",
          "description": "Build web applications using React",
          "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/01_react/logo.png",
          "bgImg": "https://github.com/ywarezk/academeez/raw/main/libs/courses/01_react/bg.png",
          "slug": "react",
          "prerequisites": ["html-css", "javascript"]
        },
        {
          "id": "1942a5a5e2b8ea593ab6561fd2ad5a7e9f2b318b",
          "title": "HTML and CSS",
          "description": "Learn to build and design web pages",
          "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/02_html-css/logo.png",
          "bgImg": "https://github.com/ywarezk/academeez/raw/main/libs/courses/02_html-css/bg.png",
          "slug": "html-css",
          "prerequisites": []
        },
        {
          "id": "53506e84a219b6ccf22e9df78fc46540b535d7ae",
          "title": "Javascript",
          "description": "Javascript began as the scripting language of web browsers, but today it is used for much more. We can use Javascript to build high performent, dynamic, web applications. We can use Javascript to build desktop apps, and fast backend server applications that interact with a database. Much more is available for you to create after harvesting the power of Javascript. And the best things about Javascript is the fact that it is pretty easy to learn.",
          "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/logo.png",
          "bgImg": "https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/bg.png",
          "slug": "javascript",
          "prerequisites": ["html-css"]
        }
      ]
    }
  }
}

export function useCourses() {
  return useQuery<{ courses: EducationItem[] }>(coursesQuery);
}
