/**
 * This will set the proxy
 * if we call /api in the frontend, it will proxy the request
 * to a different url
 *
 * Note that on E2E tests the url will be different
 *
 * Created July 2nd, 2021
 * @author: ywarezk
 * @version: 0.16.0
 */

const PROXY_CONFIG = {
  '/api': {
    target: process.env['API_URL'] || 'http://localhost:3000',
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
