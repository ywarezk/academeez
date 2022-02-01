import { createReducer } from '@ngrx/store';

export const emailReducer = createReducer({
  email: 'noreply@academeez.com',
  isNotification: false,
});
