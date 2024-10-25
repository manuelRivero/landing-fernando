// src/features/yourSlice.js
import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const initialValues = {
  contactPopupValue: false,
  verifyPopupValue: false,
  subscribePopup: false,
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
    setSubscribePopup: (state, action: PayloadAction<boolean>) => {
      state.subscribePopup = action.payload;
    },
  },
});

export const { showVerifyPopup, showContactPopup, setSubscribePopup } = globalSlice.actions;
export default globalSlice.reducer;
