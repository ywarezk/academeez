/**
 * the reducer that is in charge of the message section
 */

import { createReducer } from '@ngrx/store';
import { MessageState } from './message.state';

export const messageReducer = createReducer<MessageState>({
  greeting: 'hello world',
});
