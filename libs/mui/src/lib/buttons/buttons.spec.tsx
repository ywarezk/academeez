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
import { ThemeProvider } from '@academeez/az/styles';
import { PlayButton } from './PlayButton/PlayButton';
import PlayArrow from '@mui/icons-material/PlayArrow';

describe('buttons', () => {
  it('display all buttons', function () {
    render(
      <ThemeProvider>
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
          <div>
            <Button variant="contained" color="green">
              Start Learning
            </Button>
          </div>
          <div style={{ marginTop: '30px' }}>
            <PlayButton>About academeez</PlayButton>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Button variant="outlined" color="green">
              start_learning
            </Button>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Button startIcon={<PlayArrow />} color="dark800">
              Intro
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  });
});
