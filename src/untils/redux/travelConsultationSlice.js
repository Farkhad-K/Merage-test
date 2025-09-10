import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { travelConsultationApi } from "../api";

const initialState = {
  travelConsultationList: [],
  travelConsultationDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postTravelConsultationAsync = createAsyncThunk(
  "travelConsultation/postTravelConsultation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await travelConsultationApi.postTravelConsultation(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create Travel Consultation");
    }
  }
);

// SLICE
const travelConsultationSlice = createSlice({
  name: "travelConsultation",
  initialState,
  reducers: {
    resetTravelConsultationSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postTravelConsultationAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postTravelConsultationAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.travelConsultationList.push(action.payload);
      })
      .addCase(postTravelConsultationAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectTravelConsultation = (state) => state.travelConsultation;
export const { resetTravelConsultationSlice } = travelConsultationSlice.actions;
export default travelConsultationSlice.reducer;
