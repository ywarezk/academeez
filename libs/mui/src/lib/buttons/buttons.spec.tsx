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
            <Button variant='outlined'>
              Start Learning
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  });
});
