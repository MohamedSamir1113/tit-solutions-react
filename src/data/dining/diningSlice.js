import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  dining: {},
  loading: true,
  error: null,
};

export const fetchDining = createAsyncThunk(
  "dining/fetchDining",
  async (hotelUrl) => {
    const response = await axios.get(
      `${baseUrl}/api/Restaurant/en/${hotelUrl}`
    );
    return response.data;
  }
);

const diningSlice = createSlice({
  name: "dining",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDining.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDining.fulfilled, (state, action) => {
        state.loading = false;
        state.dining = action.payload;
      })
      .addCase(fetchDining.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default diningSlice.reducer;
