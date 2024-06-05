import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  facilities: {},
  loading: true,
  error: null,
};

export const fetchFacilities = createAsyncThunk(
  "facilities/fetchFacilities",
  async (hotelUrl) => {
    const response = await axios.get(
      `${baseUrl}/api/Facilities/en/${hotelUrl}`
    );
    return response.data;
  }
);

const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFacilities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFacilities.fulfilled, (state, action) => {
        state.loading = false;
        state.facilities = action.payload;
      })
      .addCase(fetchFacilities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default facilitiesSlice.reducer;
