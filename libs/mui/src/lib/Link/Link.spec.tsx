/**
 * Testing the link component
 *
 * Created March 19th, 2022
 * @author: ywarezk
 * @version: 0.3.0
 * @license: MIT
 */

import { render } from '@testing-library/react';
import { Link } from './Link';
import { ThemeProvider } from '@az/styles';
import Box from '@mui/material/Box'

describe('<Link />', () => {
  it('sanity', function() {
    render(
      <ThemeProvider>
        <Box sx={ { backgroundColor: 'grey.50', p: 2 } }>
          <Link>
            Blog
          </Link>

          <Link isActive sx={{ml: 2}}>
            Active
          </Link>
        </Box>
      </ThemeProvider>
    )
  })
})
