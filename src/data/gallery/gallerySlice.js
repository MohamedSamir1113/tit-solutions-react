import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const initialState = {
  gallery: {},
  loading: false,
  error: null,
};

export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async (hotelUrl) => {
    const response = await axios.get(`${baseUrl}/api/Gallery/en/${hotelUrl}`);
    return response.data;
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gallerySlice.reducer;
