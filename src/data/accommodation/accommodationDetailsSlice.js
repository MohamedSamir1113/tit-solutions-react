import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const fetchAccommodationDetails = createAsyncThunk(
  "accommodation/fetchAccommodationDetails",
  async ({ roomUrl, hotelUrl, thunkAPI }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/Rooms/RoomDetails/en/${hotelUrl}/${roomUrl}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const accommodationDetailsSlice = createSlice({
  name: "accommodationDetails",
  initialState: {
    accommodationDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodationDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccommodationDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.accommodationDetails = action.payload;
      })
      .addCase(fetchAccommodationDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accommodationDetailsSlice.reducer;
