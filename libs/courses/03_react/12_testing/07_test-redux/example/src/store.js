import { configureStore } from '@reduxjs/toolkit';
import { slice } from './slice';

export const createStore = ( preloadedState ) => {
  return configureStore({
    reducer: slice.reducer,
    ...(preloadedState && {preloadedState})
  })
}
