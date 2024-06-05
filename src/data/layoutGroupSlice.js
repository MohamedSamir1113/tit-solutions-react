import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./baseUrl";

// Define initial state
const initialState = {
  layoutGroup: [],
  loading: true,
  error: null,
};

// Async thunk for fetching hotels data
export const fetchLayoutGroup = createAsyncThunk(
  "layoutGroup/fetchLayoutGroup",
  async () => {
    const response = await axios.get(`${baseUrl}/api/GroupHome/GroupLayout/en`);
    return response.data;
  }
);

// Slice configuration
const layoutGroup = createSlice({
  name: "layoutGroup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayoutGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLayoutGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.layoutGroup = action.payload;
      })
      .addCase(fetchLayoutGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default layoutGroup.reducer;
