/**
 * The reducer will determine the next state when an action is arriving
 */

import { createReducer } from '@ngrx/store';

export const userReducer = createReducer({
  firstName: 'Yariv',
  lastName: 'Katz',
});
