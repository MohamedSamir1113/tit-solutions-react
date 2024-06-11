import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading(state, action) {
      state.loading = action.payload;
    }
  }
});

export const { isLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
