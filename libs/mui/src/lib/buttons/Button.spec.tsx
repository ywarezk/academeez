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

describe('buttons', () => {
  it.only('display all buttons', function (done) {
    this.timeout(60000000);
    render(
      <ThemeProvider>
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
          <div>
            <Button>
              Start Learning
            </Button>
          </div>
          <div style={{ marginTop: '20px'}}>
            <Button disabled>
              Button
            </Button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button variant='outlined'>
              start_learning
            </Button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button variant='outlined' color='dark'>
              start_learning
            </Button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Button color='dark'>
              start_learning
            </Button>
          </div>

          <Box sx={{ marginTop: '20px', padding: 2, bgcolor: 'grey.50' }}>
            <Button color='light' variant='outlined'>
              start_learning
            </Button>
          </Box>
        </div>
      </ThemeProvider>
    );
  });
});
