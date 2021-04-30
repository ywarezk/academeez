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

export const coursesQuery = gql`
  query {
    courses {
      id
      title
    }
  }
`

export function useCourses() {
  return useQuery<{courses: EducationItem[]}>(coursesQuery);
}
