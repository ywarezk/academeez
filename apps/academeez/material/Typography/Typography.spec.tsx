/**
 * Testing all the font styles
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ThemeProvider } from "@academeez/az/styles"
import { render } from "@testing-library/react"
import { Typography } from './Typography';

describe('<Typography />', () => {
  it('sanity', function() {
    render(
      <ThemeProvider>
        <div style={ {paddingTop: '100px', paddingLeft: '100px', backgroundColor: '#2d2d2d'} }>
          {/* scroll text */}
          <div>
            <Typography variant="subtitle2" color="white">
                Scroll
            </Typography>
          </div>

          {/* hero text */}
          <div>
            <Typography variant="h1">
              Free &amp; Open Source coding courses
            </Typography>
          </div>

          {/* courses text */}
          <div>
            <Typography variant="h2">
              Our Courses
            </Typography>
          </div>

          {/* card title */}
          <div>
            <Typography variant="h4" component="h3">
              React
            </Typography>
          </div>

        </div>
      </ThemeProvider>
    )
  })
})
