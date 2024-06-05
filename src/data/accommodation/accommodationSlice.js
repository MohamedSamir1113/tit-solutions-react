import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  accommodation: {},
  loading: true, // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchAccommodation = createAsyncThunk(
  "accommodation/fetchAccommodation",
  async (hotelUrl) => {
    const response = await axios.get(`${baseUrl}/api/Rooms/en/${hotelUrl}`);
    return response.data;
  }
);

const accommodationSlice = createSlice({
  name: "accommodation",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccommodation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccommodation.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming the API response is an array of rooms
        state.accommodation = action.payload;
      })
      .addCase(fetchAccommodation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default accommodationSlice.reducer;
