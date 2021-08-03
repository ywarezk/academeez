/**
 * read data from the message state
 */

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MessageState } from './message.state';

export const selectMessage = (state: AppState) => state.message;

export const selectGreeting = createSelector(
  selectMessage,
  (state: MessageState) => state.greeting
)
