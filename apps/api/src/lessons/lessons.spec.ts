/**
 * Testing the lessons api
 *
 * Created April 1st, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { app } from '../app'
import { expect } from 'chai'
import axios from 'axios'
import { beforeExpressApp } from '@nz/test/express';

describe('api-lessons', () => {
  beforeExpressApp(app);

  it('get all lessons', async () => {
    const response = await axios.get('http://localhost:3000/api/lessons')
    expect(response.data.length > 0).to.equal(true);
  })
})
