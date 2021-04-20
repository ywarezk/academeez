/**
 * Test file for all the buttons
 *
 * Created April 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { render } from '@testing-library/react'
import { Button } from './Button';
import { ThemeProvider } from '@academeez/az/styles';

describe('buttons', () => {
  it.only('display all buttons', (done) => {
    render(
      <ThemeProvider>
        <div style={ {marginTop: '100px', marginLeft: '100px'} }>
          <div>
            <Button variant="contained" color="green">
                Start Learning
            </Button>
          </div>
          <div style={ { marginTop: '30px'} }>
            <Button variant="contained" color="black">
              Start Learning
            </Button>
          </div>
        </div>
      </ThemeProvider>
    )

  })
});
