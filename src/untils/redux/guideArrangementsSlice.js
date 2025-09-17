import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { guideArrangementsApi } from "../api";

const initialState = {
  guideArrangementsList: [],
  guideArrangementsDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postGuideArrangementsAsync = createAsyncThunk(
  "guideArrangements/postGuideArrangements",
  async (data, { rejectWithValue }) => {
    try {
      const response = await guideArrangementsApi.postGuideArrangements(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create guide Arrangements");
    }
  }
);

// SLICE
const guideArrangementsSlice = createSlice({
  name: "guideArrangements",
  initialState,
  reducers: {
    resetGuideArrangementsSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postGuideArrangementsAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postGuideArrangementsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.guideArrangementsList.push(action.payload);
      })
      .addCase(postGuideArrangementsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectGuideArrangements = (state) => state.guideArrangements;
export const { resetGuideArrangementsSlice } = guideArrangementsSlice.actions;
export default guideArrangementsSlice.reducer;
