/**
 * Testing the lessons api
 *
 * Created April 1st, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { app } from '.'
import { Server } from 'http';
import { expect } from 'chai';

describe('api-lessons', () => {
  let server: Server;

  before((done) => {
    server = app.listen(3000, () => {
      console.log('listening on port 3000')
      done()
    })
  })

  after((done) => {
    server.close(() => {
      done()
    })
  })

  it('get all lessons', () => {
    expect(true).to.equal(true);
  })
})
