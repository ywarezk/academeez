/**
 * Testing the chapter list
 *
 * Created May 28th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 */

import { ThemeProvider } from "@academeez/az/styles"
import { Grid } from "@material-ui/core"
import { render } from "@testing-library/react"
import { ChapterList } from './ChapterList';

describe('<ChapterList />', () => {
  beforeEach(() => {
    render(
      (
        <ThemeProvider>
          <Grid container className="justify-content-center mt-5">
            <Grid item xs={10}>
              <ChapterList />
            </Grid>
          </Grid>
        </ThemeProvider>
      )
    )
  })

  it.only('sanity', function(done) {
    this.timeout(1000 * 60 * 60);
  })
})
