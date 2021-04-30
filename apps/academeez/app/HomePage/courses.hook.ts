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
          "description": "Build web applications using React"
        },
        {
          "id": "1942a5a5e2b8ea593ab6561fd2ad5a7e9f2b318b",
          "title": "HTML and CSS",
          "description": "Learn to build and design web pages"
        }
      ]
    }
  }
}

export function useCourses() {
  return useQuery<{courses: EducationItem[]}>(coursesQuery);
}
