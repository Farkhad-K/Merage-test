// Libraries
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, createTransform } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// Slices
import accommodationSlice from "./accommodationSlice";

// All reducers merging
const rootReducer = combineReducers({
  accommodation: accommodationSlice,
});

// Transform
const SetMarkerTransform = createTransform(
  (inboundState, key) => {
    if (key === "map") {
      return { ...inboundState, alls: null };
    }
    return inboundState;
  },
  (outboundState) => outboundState
);

// Persist config
const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [SetMarkerTransform],
};

// Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
