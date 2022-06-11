/**
 * Testing the CardLesson
 *
 * Created March 28th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { render } from '@testing-library/react'
import { CardLesson } from './CardLesson'
import { ThemeProvider } from '@az/styles'
import { Container } from '@mui/material'
// import { nit } from 'nz-test'
import Grid from '@mui/material/Grid'

describe('<CardLesson />', () => {
  it('Sanity', function () {
    render(
      <ThemeProvider>
        <Container sx={{ marginTop: 30 }}>
          <Grid container>
            <Grid item lg={3}>
              <CardLesson
                lesson={{
                  title: 'React Introduction',
                  description: `
                  In this chpater we will go over the basics of React.
                  What can we create with react, about the DOM, and why choose React.
                  Entry level lesson to learn react
                `,
                  bgImg:
                    'https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png',
                  duration: 66,
                  link: '/courses/react/introduction',
                  videoUrl:
                    'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    )
  })
})
