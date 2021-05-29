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
  });

  it('github api', async () => {
    const response = await axios.post(
      'https://api.github.com/graphql',
      {
        query: `
          query {
            repository(name: "academeez", owner: "ywarezk") {
              object(expression: "main:libs/courses") {
                ... on Tree {
                    entries {
                      type
                      name
                    }
                }
              }
            }
          }
        `
      },
      {
        headers: {
          "Authorization": `bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    )
    expect(response.data.data).is.ok;
  });

  it.only('grab all courses', async () => {
    try {
      const response = await axios.post(
        'http://localhost:3333/graphql',
        {
          query: `
          query {
            lessons {
              title,
              description
              logo
              bgImg
              slug
              prerequisites
              children
            }
          }
        `
        }
      )
      expect(response.data.data.courses.length > 0).to.equal(true);
    } catch(err) {
      console.log(err);
    }

  })
})
