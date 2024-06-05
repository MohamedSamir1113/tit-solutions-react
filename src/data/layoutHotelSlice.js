import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./baseUrl";

// Define initial state
const initialState = {
  layoutHotel: [],
  loading: true,
  error: null,
};

// Async thunk for fetching hotels data
export const fetchLayoutHotel = createAsyncThunk(
  "layoutHotel/fetchLayoutHotel",
  async (hotelUrl) => {
    const response = await axios.get(
      `${baseUrl}/api/Hotels/HotelLayout/en/${hotelUrl}`
    );
    return response.data;
  }
);

// Slice configuration
const layoutHotel = createSlice({
  name: "layoutHotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayoutHotel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLayoutHotel.fulfilled, (state, action) => {
        state.loading = false;
        state.layoutHotel = action.payload;
      })
      .addCase(fetchLayoutHotel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default layoutHotel.reducer;
