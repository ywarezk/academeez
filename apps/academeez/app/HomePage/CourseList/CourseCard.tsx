/**
 * Description card of a single course
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Typography, Chip, Button, Dialog } from "@academeez/az/material";
import { EducationItem } from "@academeez/entities";
import { FC, useEffect, useRef, useState } from "react";
import { Card } from './CourseCard.markup';
import { isEmpty } from 'lodash';
import { Player } from 'video-react';
import { HLSSource } from '@nz/video/react';
import classnames from 'classnames';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Block from '@material-ui/icons/Block';
import CardActions from '@material-ui/core/CardActions';
import Link from "next/link";
import { DialogContent } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import Hidden from '@material-ui/core/Hidden';

export const CourseCard: FC<{ course: EducationItem }> = ({ course }) => {
  const [isVideo, setIsVideo] = useState(false);
  const [isIntro, setIsIntro] = useState(false);
  const player = useRef(null);

  useEffect(() => {
    if (!player.current) return;
    if (!isVideo) {
      player.current.pause();
    } else {
      player.current.play();
    }
  }, [isVideo])

  return (
    <>
      <Card
        elevation={0}
        className={`${classnames({ "showVideo": isVideo })}`}
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
                <ul className="d-flex p-0 flex-wrap list-unstyled">
                  {
                    course.prerequisites.map(prerequisite => (
                      <li key={prerequisite.slug}>
                        <Chip
                          className="mr-1 mb-1"
                          label={prerequisite.title}
                          icon={<img src={prerequisite.logo} />}
                        />
                      </li>
                    ))
                  }
                </ul>
              ) : (
                <ul className="d-flex p-0 flex-wrap list-unstyled">
                  <Chip
                    className="mr-1 mb-1"
                    label="None"
                    icon={<Block />}
                  />
                </ul>
              )
            }


          </CardContent>
          <CardActions>
            <div className="d-flex w-100">
              <Hidden only={['xs', 'sm', 'md']}>
                <Button
                  className="mr-1"
                  startIcon={<PlayArrow />}
                  color="dark800"
                  variant="outlined"
                  onClick={() => setIsIntro(true)}
                >
                  Intro
                </Button>
              </Hidden>
              <Link href={`/courses/${course.slug}`} passHref>
                <Button
                  variant={isVideo ? "contained" : "outlined"}
                  color="green"
                className="flex-grow-1"
                >
                  start_learning
                </Button>
              </Link>
            </div>
            <Hidden only={['lg', 'xl']}>
              <div className="mt-2 w-100 ml-0">
                <Button
                  className="mr-1 w-100"
                  startIcon={<PlayArrow />}
                  color="dark800"
                  variant="outlined"
                  onClick={() => setIsIntro(true)}
                >
                Intro
                </Button>
              </div>
            </Hidden>
          </CardActions>
      </Card>

      <Dialog
        open={isIntro}
        fullScreen
        isCloseButton
        maxWidth="xl"
        fullWidth
        className="transparent"
        onClose={() => setIsIntro(false)}
      >
        <DialogContent>
          <Player
            height="100%"
            fluid={false}
            autoPlay
          >
            <HLSSource
              isVideoChild
              src={course.videoUrl}
            />
          </Player>
        </DialogContent>
      </Dialog>
    </>
  )
}
