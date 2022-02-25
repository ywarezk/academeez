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
            <Button variant='outlined' color='secondary'>
              start_learning
            </Button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Button color='secondary'>
              start_learning
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  });
});
