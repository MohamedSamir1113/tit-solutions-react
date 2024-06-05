import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  homeGroup: {},
  loading: false,
  error: null,
};

export const fetchHomeGroup = createAsyncThunk(
  "homeGroup/fetchHomeGroup",
  async () => {
    const response = await axios.get(`${baseUrl}/api/GroupHome/en`);
    return response.data;
  }
);

const homeGroupSlice = createSlice({
  name: "homeGroup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHomeGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.homeGroup = action.payload;
      })
      .addCase(fetchHomeGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeGroupSlice.reducer;
