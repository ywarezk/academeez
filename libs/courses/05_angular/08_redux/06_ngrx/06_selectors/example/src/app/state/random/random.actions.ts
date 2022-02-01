/**
 * actions to change the message section in the state
 */

import { createAction, props } from '@ngrx/store';

export const setNum = createAction('setTime', props<{ num: number }>());
