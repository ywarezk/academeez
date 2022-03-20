/**
 * Testing the navbar
 *
 * Created March 17th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Nav } from './Nav';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@az/styles';
import Box from '@mui/material/Box';

describe('<Nav />', () => {
  it.only('sanity', function(done) {
    this.timeout(600000000);
    render(
      <ThemeProvider>
        <Box sx={{
          backgroundColor: 'grey.100',
          height: '100vh',
          // pt: 2
        }}>
          <Nav />
        </Box>
      </ThemeProvider>
    )
  })
})
