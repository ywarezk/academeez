/**
 * Component for the entire homepage
 *
 * Created March 23rd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import bgCfa from './bg-cfa.webp';
import Head from 'next/head';
import { Lesson } from "@az/models";
import { GetStaticProps } from 'next';

type HomePageProps = {cfaLessons?: Lesson[]}

export const HomePage: FC< HomePageProps > = ({
  cfaLessons = []
}) => {
  return (
    <>
      <Head>
        <meta name="description" content="Academeez open source and free programming courses for beginners and experts" />
      </Head>
      <Box component="section" sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'grey.100',
        color: 'background.paper',
        backgroundImage: `url(${bgCfa})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>

        {/* begin intro text */}
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            textAlign: 'center',
            justifyContent: 'center'
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ color: 'primary.main', mb: 3 }}>
              academeez
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Space Mono'
              }}
              variant="h3">
              <Box component="span" sx={{color: 'info.main'}}>Open source</Box> learning platform for <Box component="span" sx={{color: 'warning.main'}}>programmers</Box>
            </Typography>
          </Box>
        </Container>
        {/* end intro text */}

        {/* begin intro cards */}

        {/* end intro cards */}
      </Box>
    </>
  )
}

/**
 * this will run during build time to grab content from the server
 */
export const getStaticProps: GetStaticProps< HomePageProps > = async () => {
  return {
    props: {
      cfaLessons: []
    }
  }
}
