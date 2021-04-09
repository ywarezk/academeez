/**
 * Testing the courses api
 *
 * Created April 8th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { beforeAfterBootstrap } from '@nz/test/express';
import { expect } from 'chai';
import { coursesBootstrap } from '../courses.bootstrap';
import axios from 'axios';

describe('courses api', () => {
  beforeAfterBootstrap(coursesBootstrap);

  it('sanity', async () => {
    const response = await axios.post(
      'http://localhost:3333/graphql',
      {
        query: `
          query {
            version
          }
        `
      }
    )
    expect(response.data.data.version).to.equal('@academeez/courses-api V0.0.1');
  })
})
