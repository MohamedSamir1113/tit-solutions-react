// src/redux/slices/loadingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { loading: true },
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { isLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
