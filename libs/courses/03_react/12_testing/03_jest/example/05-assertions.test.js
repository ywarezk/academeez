/**
 * Common assertions
 */

test('toBe - Object.is', () => {
  expect(10).toBe(10);
  expect({}).not.toBe({});
});

test('toEqual - deep comparison', () => {
  expect({a: 'hello'}).toEqual({a: 'hello'})
})
