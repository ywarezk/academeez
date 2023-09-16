/**
 * Support file for component unit tests
 *
 * Created September 15th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import './shared';
import {mount} from 'cypress/react18';

Cypress.Commands.add('mount', mount);
