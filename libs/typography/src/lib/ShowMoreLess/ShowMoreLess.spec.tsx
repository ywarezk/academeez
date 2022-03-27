/**
 * Unit testing the ShowMoreLess component
 *
 * Created March 26th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { render } from '@testing-library/react'
import { ShowMoreLess } from './ShowMoreLess'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@az/styles'

describe('<ShowMoreLess />', () => {
  it('Sanity', function() {
    render(
      <ThemeProvider>
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'grey.100', p: 5}}>
          <Box sx={{ width: 294, backgroundColor: 'background.paper' }}>
            <ShowMoreLess height={100}>
              <Typography variant='body1'>
                very long text very long text
                very long text very long text
                <br/>
                very long text very long text
                very long text very long text
                very long text
                very long text very long text
                very long text very long text
                <br/>
                very long text very long text
                very long text very long text
                finish
              </Typography>
            </ShowMoreLess>
          </Box>
        </Box>
      </ThemeProvider>
    )
  })

  it('on short text show more should not be displayed', function() {
    render(
      <ThemeProvider>
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'grey.100', p: 5 }}>
          <Box sx={{ width: 294, backgroundColor: 'background.paper' }}>
            <ShowMoreLess height={300}>
              <Typography variant='body1'>
                short text no need to expend
              </Typography>
            </ShowMoreLess>
          </Box>
        </Box>
      </ThemeProvider>
    )
  })
})
