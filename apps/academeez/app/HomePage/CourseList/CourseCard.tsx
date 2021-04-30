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

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  return (
    <h1>
      Course card: { course.title }
    </h1>
  )
}
