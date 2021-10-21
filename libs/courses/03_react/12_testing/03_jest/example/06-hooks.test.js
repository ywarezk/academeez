/**
 * use hooks to setup and teardown tests
 */

describe('hooks example', () => {
  beforeAll(() => {
    console.log('run once for a group')
  });

  beforeEach(() => {
    console.log('run before each test in a group')
  });

  afterAll(() => {
    console.log('run once after all group tests');
  });

  afterEach(() => {
    console.log('run after each test in the group');
  });
});
