import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const fetchFacilityDetails = createAsyncThunk(
  "dining/fetchFacilityDetails",
  async ({ hotelUrl, facilityUrl, thunkAPI }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/Facilities/en/${hotelUrl}/${facilityUrl}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const facilityDetailsSlice = createSlice({
  name: "facilityDetails",
  initialState: {
    facilityDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacilityDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFacilityDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.facilityDetails = action.payload;
      })
      .addCase(fetchFacilityDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default facilityDetailsSlice.reducer;
