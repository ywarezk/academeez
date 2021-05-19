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
import { FC, useEffect, useRef, useState } from "react";
import { Card } from './CourseCard.markup';
import { isEmpty } from 'lodash';
import { Player } from 'video-react';
import { HLSSource } from '@nz/video/react';
import classnames from 'classnames';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  const [isVideo, setIsVideo] = useState(false);
  const player = useRef(null);

  useEffect(() => {
    if (!player.current) return;
    if (!isVideo) {
      player.current.pause();
    } else {
      // setTimeout(() => {
        player.current.play();
      // }, 1000)
    }
  }, [isVideo])

  return (
    <div
      className="mb-2 h-100 pb-2"
    >
      <Card
        className={classnames({ "showVideo": isVideo })}
        onMouseEnter={() => setIsVideo(true)}
        onMouseLeave={() => setIsVideo(false)}
      >
          <CardMedia
            image={course.bgImg}
          >
            {
              isVideo ? (
                <Player
                  className="course-intro-player"
                  ref={player}
                >
                  <HLSSource
                    isVideoChild
                    src={course.videoUrl}
                  />
                </Player>
              ) : (
                <img className="logo" src={course.logo} alt={course.title} />
              )
            }
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
      </Card>
    </div>
  )
}
