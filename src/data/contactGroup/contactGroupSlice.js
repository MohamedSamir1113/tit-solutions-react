import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  contactGroup: {},
  loading: false,
  error: null,
};

export const fetchContactGroup = createAsyncThunk(
  "contactGroup/fetchContactGroup",
  async () => {
    const response = await axios.get(
      `${baseUrl}/api/GroupHome/GroupContactUs/en`
    );
    return response.data;
  }
);

const contactGroupSlice = createSlice({
  name: "contactGroup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContactGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.contactGroup = action.payload;
      })
      .addCase(fetchContactGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactGroupSlice.reducer;
