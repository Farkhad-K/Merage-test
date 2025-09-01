import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { curatedDayApi } from "../api";

const initialState = {
  curatedDayList: [],
  curatedDayDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postCuratedDayAsync = createAsyncThunk(
  "curatedDay/postCuratedDay",
  async (data, { rejectWithValue }) => {
    try {
      const response = await curatedDayApi.postCuratedDay(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create Curated Day");
    }
  }
);

// SLICE
const curatedDaySlice = createSlice({
  name: "curatedDay",
  initialState,
  reducers: {
    resetCuratedDaySlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postCuratedDayAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postCuratedDayAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.curatedDayList.push(action.payload);
      })
      .addCase(postCuratedDayAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectCuratedDay = (state) => state.curatedDay;
export const { resetAccommodationSlice } = curatedDaySlice.actions;
export default curatedDaySlice.reducer;
