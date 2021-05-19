/**
 * Description card of a single course
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Typography, Chip } from "@academeez/az/material";
import { EducationItem } from "@academeez/entities";
import { FC } from "react";
import { Card, CardContent, CardMedia, CardActionArea } from './CourseCard.markup';
import { isEmpty } from 'lodash';

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  return (
    <div className="mb-2 h-100 pb-2">
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
            <Typography className="mt-1 description" variant="subtitle1" component="p" color="dark800">
              {course.shortDescription}
            </Typography>
            <Typography className="mt-1" variant="h6" color="dark800">
              Prerequisites
            </Typography>
            {
              !isEmpty(course.prerequisites) ? (
                <ul className="d-flex p-0 flex-wrap">
                  {
                    course.prerequisites.map(prerequisite => (
                      <Chip
                        className="mr-1 mb-1"
                        label={prerequisite.title}
                        icon={<img src={prerequisite.logo} />}
                        key={prerequisite.slug} />
                    ))
                  }
                </ul>
              ) : (
                <Typography className="mt-1" variant="subtitle1" component="p" color="dark800">
                  None
                </Typography>
              )
            }


          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
