import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { exclusiveExperienceApi } from "../api";

const initialState = {
  exclusiveExperienceList: [],
  exclusiveExperienceDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const postExclusiveExperienceAsync = createAsyncThunk(
  "exclusiveExperience/postExclusiveExperience",
  async (data, { rejectWithValue }) => {
    try {
      const response = await exclusiveExperienceApi.postExclusiveExperience(
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create Exclusive Experience");
    }
  }
);

// SLICE
const exclusiveExperienceSlice = createSlice({
  name: "exclusiveExperience",
  initialState,
  reducers: {
    resetExclusiveExperienceSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(postExclusiveExperienceAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postExclusiveExperienceAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.exclusiveExperienceList.push(action.payload);
      })
      .addCase(postExclusiveExperienceAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectExclusiveExperience = (state) => state.ExclusiveExperience;
export const { resetExclusiveExperienceSlice } =
  exclusiveExperienceSlice.actions;
export default exclusiveExperienceSlice.reducer;
