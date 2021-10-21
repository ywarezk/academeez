/**
 * mocks can be used to replace functions,
 * stub server calls, spy on function calls and more
 */

const axios = require('axios');

jest.mock('axios');

test('fake server call', async () => {
  axios.get.mockResolvedValue({data: [{title: 'fake response'}]});
  const response = await axios.get('http://some-url.com');
  expect(response.data[0].title).toBe('fake response')
});
