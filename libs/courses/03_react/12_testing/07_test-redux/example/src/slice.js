import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'root',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {state.user = action.payload}
  }
})
