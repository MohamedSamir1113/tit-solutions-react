import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  faqGroup: {},
  loading: false,
  error: null,
};

export const fetchFaqGroup = createAsyncThunk(
  "faqGroup/fetchFaqGroup",
  async () => {
    const response = await axios.get(`${baseUrl}/api/GroupHome/GroupFAQs/en`);
    return response.data;
  }
);

const faqGroupSlice = createSlice({
  name: "faqGroup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFaqGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaqGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.faqGroup = action.payload;
      })
      .addCase(fetchFaqGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default faqGroupSlice.reducer;
