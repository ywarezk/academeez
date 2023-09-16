/**
 * Cypress declaration.
 * Teach typescript about cypress new commands
 *
 * Created September 11th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

/// <reference types="cypress" />

declare namespace Cypress {
  export interface Chainable<Subject> {
    /**
     * for every element we need to select we will add the data-test.
     * this method will select based on that attribute
     * @param dataTestAttribute the value of the data-test
     * @param args additional options passed to cy.get
     * @example cy.getBySel('report-table')
     */
    getBySel<E extends Node = HTMLElement>(dataTestAttribute: string, args?: any): Chainable<JQuery<E>>;

    /**
     * select element with partial data-test
     * will allow us to group elements with data-test
     * @param dataTestPrefixAttribute part of the data-test to select
     * @param args the rest of the cy.get args
     * @example cy.getBySelLike('option-') // will select <div data-test="option-cu"></div>
     */
    getBySelLike<E extends Node = HTMLElement>(dataTestPrefixAttribute: string, args?: any): Chainable<JQuery<E>>;

    mount: typeof import('cypress/react18').mount;
  }
}
