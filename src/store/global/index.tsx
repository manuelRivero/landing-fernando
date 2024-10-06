// src/features/yourSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  contactPopupValue: false,
  verifyPopupValue: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialValues,
  reducers: {
    showVerifyPopup: (state) => {
      state.verifyPopupValue = true;
    },
    hideVerifyPopup: (state) => {
      state.verifyPopupValue = false;
    },
    showContactPopup: (state) => {
      state.contactPopupValue = true;
    },
    hideContactPopup: (state) => {
      state.contactPopupValue = false;
    },
  },
});

export const {
  showVerifyPopup,
  hideVerifyPopup,
  showContactPopup,
  hideContactPopup,
} = globalSlice.actions;
export default globalSlice.reducer;
