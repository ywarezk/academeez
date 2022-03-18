/**
 * Unit testing the app bar
 *
 * Created March 4th, 2022
 * @author: ywarezk
 * @version: 0.1.0
 * @license: MIT
 */

import { render } from '@testing-library/react';
import { ThemeProvider } from '@az/styles';
import { AppBar } from './AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

describe('<AppBar />', () => {
  it.only('sanity', function(done) {
    this.timeout(600000000);
    render(
      <ThemeProvider>
        <AppBar color='transparent'>
          <Toolbar>
            <Typography variant='h3'>
              This is the app bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    )
  })
})
