/**
 * Description card of a single course
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Typography } from "@academeez/az/material";
import { EducationItem } from "@academeez/entities";
import { FC } from "react";
import { Card, CardContent } from './CourseCard.markup';

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h3" color="dark800">
          {course.title}
        </Typography>
        <Typography variant="subtitle1" color="dark800">
          {course.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
