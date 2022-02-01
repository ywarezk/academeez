test.only('run a single test', () => {
  debugger;
  expect(true).toBe(true);
});

test('this will not run', () => {
  debugger;
  expect(true).toBe(true);
});
