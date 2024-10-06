// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";

export interface RootState {
    global: ReturnType<typeof globalReducer>;
  }

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;
