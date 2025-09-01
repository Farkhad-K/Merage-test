import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { luxuryTransportApi } from "../api";

const initialState = {
  luxuryTransportList: [],
  luxuryTransportDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postLuxuryTransportAsync = createAsyncThunk(
  "luxuryTransport/postLuxuryTransport",
  async (data, { rejectWithValue }) => {
    try {
      const response = await luxuryTransportApi.postLuxuryTransport(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create luxury Transport");
    }
  }
);

// SLICE
const luxuryTransportSlice = createSlice({
  name: "luxuryTransport",
  initialState,
  reducers: {
    resetLuxuryTransportSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postLuxuryTransportAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postLuxuryTransportAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.luxuryTransportList.push(action.payload);
      })
      .addCase(postLuxuryTransportAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectLuxuryTransport = (state) => state.luxuryTransport;
export const { resetLuxuryTransportSlice } = luxuryTransportSlice.actions;
export default luxuryTransportSlice.reducer;
