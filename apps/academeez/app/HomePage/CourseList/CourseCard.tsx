/**
 * Description card of a single course
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { EducationItem } from "@academeez/entities";
import { FC } from "react";
import { Card, CardContent } from './CourseCard.markup';

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  return (
    <Card>
      <CardContent>
        Course card: {course.title}
      </CardContent>
    </Card>
  )
}
