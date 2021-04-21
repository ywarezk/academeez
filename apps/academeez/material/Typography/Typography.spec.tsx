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
  it.only('sanity', (done) => {
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
            <Typography>
            </Typography>
          </div>

        </div>
      </ThemeProvider>
    )
  })
})
