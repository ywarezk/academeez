/**
 * Test file for the homepage
 *
 * Created April 9th, 2023
 * @author: ywarezk
 * @version: 0.1.0
 * @license: MIT
 */

describe('<Nav />', () => {
  beforeEach(() => {
    return cy.visit('/');
  });

  it('logo image', () => {
    // logo image should be displayed
    // clicking should lead to homepage
    cy.getBySel('az-logo').should('be.visible').click();

    // cypress expect url to equal /
    cy.location().should(location => {
      expect(location.pathname).to.equal('/');
    });
  });

  it('link github', () => {
    cy.getBySel('github-link').invoke('removeAttr', 'target').click();

    cy.url().should('contain', 'github.com/ywarezk/academeez');
  });

  it('link youtube', () => {
    cy.getBySel('youtube-link').invoke('removeAttr', 'target').click();
    cy.url().should('contain', 'youtube.com');
  });
});
