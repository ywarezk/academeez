/**
 * Display the list of courses
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useCourses } from '../courses.hook';

export const CourseList: FC = () => {
  const { data } = useCourses();

  return (
    <ul>
      {
        data?.courses.map(course => (
          <li key={course.id}>
            { course.title }
          </li>
        ))
      }
    </ul>
  )
}
