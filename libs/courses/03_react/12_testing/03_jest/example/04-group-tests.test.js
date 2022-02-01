/**
 * Creating a group of tests
 */

describe('group of test', () => {
  describe('sub group 1', () => {
    it('test in group1', () => {
      expect(true).toBe(true);
    });
  });

  describe('sub group 2', () => {
    it('test in group2', () => {
      expect(true).toBe(true);
    });
  });

  it('test in parent group', () => {
    expect(true).toBe(true);
  });
});
