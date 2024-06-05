import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  meetingsGroup: {},
  loading: true,
  error: null,
};

export const fetchMeetingsGroup = createAsyncThunk(
  "meetingsGroup/fetchMeetingsGroup",
  async () => {
    const response = await axios.get(`${baseUrl}/api/MeetingEvents/en`);
    return response.data;
  }
);

const meetingsGroupSlice = createSlice({
  name: "meetingsGroup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMeetingsGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMeetingsGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.meetingsGroup = action.payload;
      })
      .addCase(fetchMeetingsGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default meetingsGroupSlice.reducer;
