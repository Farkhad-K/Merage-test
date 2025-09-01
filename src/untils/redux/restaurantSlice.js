import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restaurantApi } from "../api";

const initialState = {
  restaurantList: [],
  restaurantDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postRestaurantAsync = createAsyncThunk(
  "restaurant/postRestaurant",
  async (data, { rejectWithValue }) => {
    try {
      const response = await restaurantApi.postRestaurant(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed create restaurant");
    }
  }
);

// SLICE
const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    resetRestaurantSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postRestaurantAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postRestaurantAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurantList.push(action.payload);
      })
      .addCase(postRestaurantAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectRestaurant = (state) => state.restaurant;
export const { resetRestaurantSlice } = restaurantSlice.actions;
export default restaurantSlice.reducer;
