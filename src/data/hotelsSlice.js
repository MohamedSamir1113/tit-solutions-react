import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./baseUrl";

// Define initial state
const initialState = {
  hotels: [],
  loading: true,
  error: null,
};

// Async thunk for fetching hotels data
export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async () => {
  const response = await axios.get(`${baseUrl}/api/Hotels/en`);
  return response.data;
});

// Slice configuration
const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotelsSlice.reducer;
