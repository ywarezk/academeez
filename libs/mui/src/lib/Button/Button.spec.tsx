/**
 * Test file for all the buttons
 *
 * Created April 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { render } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '@az/styles';
import Box from '@mui/material/Box';
import PlayArrow from '@mui/icons-material/PlayArrow';

describe('buttons', () => {
  it.only('display all buttons', function (done) {
    this.timeout(60000000);
    render(
      <ThemeProvider>
        <Box sx={{ mt: '100px', ml: '100px' }}>
          <Box>
            <Button>
              Start Learning
            </Button>
          </Box>
          <Box sx={{ mt: '20px'}}>
            <Button disabled>
              Button
            </Button>
          </Box>
          <Box sx={{ mt: '20px' }}>
            <Button variant='outlined'>
              start_learning
            </Button>
          </Box>
          <Box sx={{ mt: '20px' }}>
            <Button variant='outlined' color='dark'>
              start_learning
            </Button>
          </Box>

          <Box sx={{ mt: '20px' }}>
            <Button color='dark'>
              start_learning
            </Button>
          </Box>

          <Box sx={{ marginTop: '20px', padding: 2, bgcolor: 'grey.50' }}>
            <Button color='light' variant='outlined'>
              start_learning
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    );
  });
});
