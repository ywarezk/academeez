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
import { Card, CardContent, CardMedia, CardActionArea } from './CourseCard.markup';

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={course.bgImg}
        >
          <img src={course.logo} alt="Learn React" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" component="h3" color="dark800">
            {course.title}
          </Typography>
          <Typography className="mt-1" variant="subtitle1" component="p" color="dark800">
            {course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
