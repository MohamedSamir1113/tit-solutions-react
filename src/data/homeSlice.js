import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./baseUrl";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHomePageData = createAsyncThunk(
  "home/fetchHomePageData",
  async () => {
    const response = await axios.get(`${baseUrl}/api/Home/GetWholeHomePage/en`);
    return response.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHomePageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomePageData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
