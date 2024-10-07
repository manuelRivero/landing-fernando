// src/features/yourSlice.js
import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const initialValues = {
  contactPopupValue: false,
  verifyPopupValue: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialValues,
  reducers: {
    showVerifyPopup: (state, action: PayloadAction<boolean>) => {
      state.verifyPopupValue = action.payload;
    },
    showContactPopup: (state, action: PayloadAction<boolean>) => {
      state.contactPopupValue = action.payload;
    },
  },
});

export const { showVerifyPopup, showContactPopup } = globalSlice.actions;
export default globalSlice.reducer;
