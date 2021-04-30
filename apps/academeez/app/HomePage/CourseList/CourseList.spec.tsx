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

describe('<CourseList />', () => {
  beforeEach(() => {
    render(
      (
        <ThemeProvider>
          <MockedProvider mocks={[mockCourses]}>
            <CourseList />
          </MockedProvider>
        </ThemeProvider>
      )
    )
  });

  it.only('sanity', (done) => {

  })
})
