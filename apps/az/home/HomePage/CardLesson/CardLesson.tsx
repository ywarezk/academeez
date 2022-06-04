/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * Card displaying a lesson
 * I want as quickly as possible to direct the user to a lesson
 *
 * Created March 27th, 2022
 * @author: ywarezk
 * @version: 0.1.0
 * @license: MIT
 */

import { FC } from 'react'
import Card from '@az/mui/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import ShowMoreLess from '@az/typography/ShowMoreLess'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@az/mui/Button'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Link from 'next/link'
import Box from '@mui/material/Box'
import ButtonPlay from '@az/mui/ButtonPlay'
import { Lesson } from '@az/models'

export const CardLesson: FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <Card sx={{ maxWidth: 294 }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia image={lesson.bgImg} component="img" height="170" />
        <Box
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
          }}
        >
          <Link href={lesson.link} passHref>
            <ButtonPlay fontSize={62} sx={{ position: 'absolute' }} />
          </Link>
        </Box>
      </Box>
      <CardContent>
        <Typography
          sx={{
            textAlign: 'left',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
          gutterBottom
          variant="h5"
        >
          {lesson.title}
        </Typography>
        <ShowMoreLess height={90}>
          <Typography sx={{ textAlign: 'left' }} variant="body1">
            {lesson.description}
          </Typography>
        </ShowMoreLess>
      </CardContent>
      <CardActions>
        <Link href={lesson.link} passHref>
          <Button
            sx={{ width: '100%' }}
            variant="outlined"
            startIcon={<PlayArrow />}
          >
            Start Learning
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
