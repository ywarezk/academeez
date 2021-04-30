/**
 * Testing the course list
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { CourseList } from './CourseList';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockCourses } from '../courses.hook';
import { ThemeProvider } from '@academeez/az/styles';
import { Grid } from '@material-ui/core';

describe('<CourseList />', () => {
  beforeEach(() => {
    render(
      (
        <ThemeProvider>
          <MockedProvider mocks={[mockCourses]}>
            <Grid container className="justify-content-center mt-6">
              <Grid item xs={10}>
                <CourseList />
              </Grid>
            </Grid>
          </MockedProvider>
        </ThemeProvider>
      )
    )
  });

  it.only('sanity', (done) => {

  })
})
