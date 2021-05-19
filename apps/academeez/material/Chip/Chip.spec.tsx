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
  it.only('sanity', (done) => {
    render(
      <ThemeProvider>
        <Chip label="Javascript" />
      </ThemeProvider>
    )
  })
})
