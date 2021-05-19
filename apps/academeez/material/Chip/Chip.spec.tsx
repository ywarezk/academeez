/**
 * Sanity test for the chip
 *
 * Created May 15th, 2021
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

import { render } from "@testing-library/react"
import { Chip } from './Chip';
import { ThemeProvider } from '@academeez/az/styles';

describe('chip', () => {
  it('sanity', (done) => {
    render(
      <ThemeProvider>
        <div style={ { marginTop: 40, marginLeft: 40} }>
          <Chip
            label="Javascript"
            icon={<img src="https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/logo.png" />} />
        </div>
      </ThemeProvider>
    )
  })
})
