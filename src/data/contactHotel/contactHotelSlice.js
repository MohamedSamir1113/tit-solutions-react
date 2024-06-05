import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  contactHotel: {},
  loading: false,
  error: null,
};

export const fetchContactHotel = createAsyncThunk(
  "contactHotel/fetchContactHotel",
  async (hotelUrl) => {
    const response = await axios.get(`${baseUrl}/api/ContactUs/en/${hotelUrl}`);
    return response.data;
  }
);

const contactHotelSlice = createSlice({
  name: "contactHotel",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContactHotel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactHotel.fulfilled, (state, action) => {
        state.loading = false;
        state.contactHotel = action.payload;
      })
      .addCase(fetchContactHotel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactHotelSlice.reducer;
