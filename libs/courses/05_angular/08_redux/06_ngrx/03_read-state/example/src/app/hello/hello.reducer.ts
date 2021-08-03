/**
 * The reducer will determine the next state when an action is arriving
 */

import { createReducer } from '@ngrx/store';

export const helloReducer = createReducer({
  message: 'hello world'
})
