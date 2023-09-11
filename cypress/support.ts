/**
 * Description of the file
 *
 * Created January 18th, 2021
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

import 'cypress-wait-until';
import 'cypress-pipe';

/**
 * In tests we use cy.getBySel('selector') to get an elements by data-test attribute
 */
Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test="${selector}"]`, ...args);
});

/**
 * In tests we use cy.getBySelLike('selector') to get elements by partial data-test attribute
 */
Cypress.Commands.add('getBySelLike', (selector, ...args) => {
  return cy.get(`[data-test*="${selector}"]`, ...args);
});
