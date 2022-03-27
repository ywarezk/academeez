/**
 * Testing the card component
 *
 * Created March 25th, 2022
 * @author: ywarezk
 * @version: 0.4.0
 * @license: MIT
 */

import { Card } from './Card'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@az/styles'
import CardMedia from '@mui/material/CardMedia';
import lessonBgLecturer from './lesson-bg-lecturer.png';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShowMoreText from "react-show-more-text";

describe('<Card />', () => {
  it.only('Sanity', function(done) {
    this.timeout(6000000000)
    render(
      <ThemeProvider>
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'grey.100', p: 3}}>
          <Card sx={{ maxWidth: 294 }}>
            <CardMedia
              image={lessonBgLecturer}
              component="img"
              height="170"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Introduction to React
              </Typography>
              <ShowMoreText
                lines={4}
                more="Show more"
                expanded={false}
                less="Show less"
                keepNewLines
              >
                <Typography variant='body1'>
                  lurem ipsum about react hello world foo bar.
                  hello new paragraph what's up. this could be very long and we want a read more option.
                  lurem ipsum about react hello world foo bar.
                  hello new paragraph what's up. this could be very long and we want a read more option.
                  lurem ipsum about react hello world foo bar.
                  hello new paragraph what's up. this could be very long and we want a read more option.
                  lurem ipsum about react hello world foo bar.
                  hello new paragraph what's up. this could be very long and we want a read more option.
                </Typography>
              </ShowMoreText>
            </CardContent>
          </Card>
        </Box>
      </ThemeProvider>
    )
  })
})
