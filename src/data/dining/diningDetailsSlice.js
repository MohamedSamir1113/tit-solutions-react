import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const fetchDiningDetails = createAsyncThunk(
  "dining/fetchDiningDetails",
  async ({ hotelUrl, restaurantUrl, thunkAPI }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/Restaurant/RestaurantDetails/en/${hotelUrl}/${restaurantUrl}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const diningDetailsSlice = createSlice({
  name: "diningDetails",
  initialState: {
    diningDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiningDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiningDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.diningDetails = action.payload;
      })
      .addCase(fetchDiningDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default diningDetailsSlice.reducer;
