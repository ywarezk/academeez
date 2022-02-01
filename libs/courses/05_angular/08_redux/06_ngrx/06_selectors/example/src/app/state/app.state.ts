/**
 * Defines the entire state that is held in the store
 */

import { MessageState } from './message';
import { RandomState } from './random';

export interface AppState {
  message: MessageState;
  random: RandomState;
}
