/**
 * Testing the play button
 *
 * Created March 28th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ButtonPlay } from './ButtonPlay'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@az/styles';
import Box from '@mui/material/Box';

describe('<ButtonPlay />', () => {
  it('Sanity', function() {
    render(
      <ThemeProvider>
        <Box sx={{p: 5, backgroundColor: 'grey.100'}}>
          <ButtonPlay sx={{fontSize: 100}} />
        </Box>
      </ThemeProvider>
    )
  })
})
