import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accommodationApi } from "../api";

const initialState = {
  accommodationList: [],
  accommodationDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postAccommodationAsync = createAsyncThunk(
  "accommodation/postAccommodation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await accommodationApi.postAccommodation(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create accommodation");
    }
  }
);

// SLICE
const accommodationSlice = createSlice({
  name: "accommodation",
  initialState,
  reducers: {
    resetAccommodationSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postAccommodationAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postAccommodationAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accommodationList.push(action.payload);
      })
      .addCase(postAccommodationAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectAccommodation = (state) => state.accommodation;
export const { resetAccommodationSlice } = accommodationSlice.actions;
export default accommodationSlice.reducer;
