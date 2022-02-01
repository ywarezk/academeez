/**
 * combine all the reducers here
 */

import { messageReducer } from './message';
import { randomReducer } from './random';

export const reducers = {
  message: messageReducer,
  random: randomReducer,
};
