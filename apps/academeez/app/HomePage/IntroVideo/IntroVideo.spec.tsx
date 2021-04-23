/**
 * Testing the intro video
 *
 * Created April 24th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ThemeProvider } from '@academeez/az/styles';
import { render } from '@testing-library/react';
import { IntroVideo } from './IntroVideo';

describe('<IntroVideo />', () => {
  it('sanity', function() {
    render(
      <ThemeProvider>
        <IntroVideo />
      </ThemeProvider>
    )
  })
})
