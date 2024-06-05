import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  homeHotel: {},
  loading: false,
  error: null,
};

export const fetchHomeHotel = createAsyncThunk(
  "homeHotel/fetchHomeHotel",
  async (hotelUrl) => {
    const response = await axios.get(`${baseUrl}/api/Hotels/en/${hotelUrl}`);
    return response.data;
  }
);

const homeHotelSlice = createSlice({
  name: "homeHotel",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHomeHotel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeHotel.fulfilled, (state, action) => {
        state.loading = false;
        state.homeHotel = action.payload;
      })
      .addCase(fetchHomeHotel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeHotelSlice.reducer;
