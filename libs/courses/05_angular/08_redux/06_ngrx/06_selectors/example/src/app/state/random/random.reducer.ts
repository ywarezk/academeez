/**
 * reducer for the random section
 */

import { createReducer, on, State } from '@ngrx/store';
import { RandomState } from './random.state';
import { setNum } from './random.actions';

export const randomReducer = createReducer<RandomState>(
  {
    num: Math.random()
  },
  on(setNum, (state: RandomState, action) => ({...state, num: action.num}))
);
