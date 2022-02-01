/**
 * testing passport authentication
 */

const axios = require('axios');
const { strictEqual } = require('assert');

describe('passport-local', () => {
  let server;

  before((done) => {
    server = require('./app');
    server.on('listened', function () {
      console.log('The server is running!');
      done();
    });
  });

  it('success login', async () => {
    const response = await axios.post('http://localhost:3000/login', {
      username: 'academeez',
      password: '12345678',
    });
    strictEqual(response.status, 200);
  });

  it('error login', async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: 'academeez',
        password: '123456781',
      });
    } catch (err) {
      strictEqual(err.response.status, 401);
    }
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });
});
