/**
 * Testing the scroll line
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ThemeProvider } from '@academeez/az/styles';
import { render } from '@testing-library/react';
import { ScrollLine } from './ScrollLine';

describe('<ScrollLine />', () => {
  it('sanity', () => {
    render(
      <ThemeProvider>
        <div
          style={{
            position: 'relative',
            height: '100vh',
            backgroundColor: '#2d2d2d',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ScrollLine />
        </div>
      </ThemeProvider>
    );
  });
});
