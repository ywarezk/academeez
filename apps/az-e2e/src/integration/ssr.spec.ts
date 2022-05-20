/**
 * These tests will inspect the SSR on different pages
 *
 * Created May 16th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

describe('SSR', () => {
  it('HomePage', () => {
    cy.visit('/', { script: false } as any)
    cy.screenshot('SSR-HomePage')
  });
});
