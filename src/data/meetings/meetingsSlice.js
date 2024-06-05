import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  meetings: {},
  loading: true,
  error: null,
};

export const fetchMeetings = createAsyncThunk(
  "meetings/fetchMeetings",
  async (hotelUrl) => {
    const response = await axios.get(
      `${baseUrl}/api/MeetingEvents/en/${hotelUrl}`
    );
    return response.data;
  }
);

const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMeetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMeetings.fulfilled, (state, action) => {
        state.loading = false;
        state.meetings = action.payload;
      })
      .addCase(fetchMeetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default meetingsSlice.reducer;
