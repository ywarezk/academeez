/**
 * Testing our links
 *
 * Created April 20th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ThemeProvider } from '@academeez/az/styles';
import { render } from '@testing-library/react';
import { Link } from './Link';

describe('<Link />', () => {

  it('different links', () => {
    render(
      <ThemeProvider>
        <div style={ { marginLeft: '100px', marginTop: '100px', backgroundColor: 'black'}}>
          <Link>
            Blog
          </Link>
        </div>

        <div style={{ paddingTop: '30px', paddingLeft: '10px', height: '60px', marginLeft: '100px',marginTop: '100px', backgroundColor: 'black' }}>
          <Link outline>
            All courses
          </Link>
        </div>

        <div style={{ paddingTop: '30px', paddingLeft: '10px', height: '60px', marginLeft: '100px', marginTop: '100px', backgroundColor: 'black' }}>
          <Link outline color="green">
            All courses
          </Link>
        </div>
      </ThemeProvider>
    )
  })

})
