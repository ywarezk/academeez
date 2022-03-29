/**
 * Test file for the homepage
 *
 * Created March 23rd, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { HomePage } from './HomePage';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@az/styles';

describe('<HomePage />', () => {
  it.only('Sanity', function() {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    )
  })
})
