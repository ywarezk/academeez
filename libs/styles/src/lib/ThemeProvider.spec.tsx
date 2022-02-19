/**
 * Testing my theme provider
 *
 * Created February 16th, 2022
 * @author: ywarezk
 * @version: 1.0.0
 * @license: MIT
 */

import { render } from '@testing-library/react'
import { ThemeProvider } from './ThemeProvider';
import Button from '@mui/material/Button';
import { expect } from 'chai';

describe('<ThemeProvider />', () => {
  it('sanity', function() {
    render(
      (
        <ThemeProvider>
          <Button>
            Hello World
          </Button>
        </ThemeProvider>
      )
    );
    expect(true).to.equal(true);
  });
});
