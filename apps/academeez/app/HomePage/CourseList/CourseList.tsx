/**
 * Display the list of courses
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Grid } from "@material-ui/core";
import { FC } from "react";
import { useCourses } from '../courses.hook';
import { CourseCard } from './CourseCard';

export const CourseList: FC = () => {
  const { data } = useCourses();

  return (
    <Grid container xs={12}>
      {
        data?.courses.map(course => (
          <Grid key={course.id} item xs={12} sm={6} md={4} lg={3} >
            <CourseCard course={course} />
          </Grid>
        ))
      }
    </Grid>
  )
}
