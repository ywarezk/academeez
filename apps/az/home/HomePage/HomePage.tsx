/**
 * Component for the entire homepage
 *
 * Created March 23rd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material'
import bgCfa from './bg-cfa.webp'
import Head from 'next/head'
import { Lesson, getLessons, lessonFilter } from '@az/models'
import { GetStaticProps } from 'next'
import { CardLesson } from './CardLesson'

type HomePageProps = { cfaLessons?: Lesson[] }

export const HomePage: FC<HomePageProps> = ({ cfaLessons = [] }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Academeez open source and free programming courses for beginners and experts"
        />
      </Head>
      <Box
        component="section"
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'grey.100',
          color: 'background.paper',
          backgroundImage: `url(${bgCfa})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingTop: 8,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            textAlign: 'center',
            minHeight: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* begin intro text */}
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: 'primary.main',
                mb: 3,
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            >
              academeez
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Space Mono',
              }}
              variant="h3"
            >
              <Box component="span" sx={{ color: 'info.main' }}>
                Open source
              </Box>{' '}
              learning platform for{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>
                programmers
              </Box>
            </Typography>
          </Box>
          {/* end intro text */}

          {/* begin intro cards */}
          <Box
            sx={{
              paddingTop: 10,
            }}
          >
            <Grid container>
              {cfaLessons.map((lesson) => {
                return (
                  <Grid
                    sx={{
                      justifyContent: 'center',
                      display: 'flex',
                      marginBottom: 5,
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    item
                    key={lesson.link}
                  >
                    <CardLesson lesson={lesson} />
                  </Grid>
                )
              })}
            </Grid>
          </Box>
          {/* end intro cards */}
        </Container>
      </Box>
    </>
  )
}

/**
 * this will run during build time to grab content from the server
 */
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const lessons = await getLessons()
  return {
    props: {
      cfaLessons: lessonFilter(lessons, { isFeatured: true }),
    },
  }
}
