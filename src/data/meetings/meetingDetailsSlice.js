import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const fetchMeetingDetails = createAsyncThunk(
  "meetingDetails/fetchMeetingDetails",
  async ({ hotelUrl, facilityUrl, thunkAPI }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/MeetingEvents/getMeetingEventDetails/en/${hotelUrl}/${facilityUrl}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const meetingDetailsSlice = createSlice({
  name: "meetingDetails",
  initialState: {
    meetingDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetingDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMeetingDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.meetingDetails = action.payload;
      })
      .addCase(fetchMeetingDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default meetingDetailsSlice.reducer;
