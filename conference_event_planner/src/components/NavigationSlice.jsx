import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLandingPage: true,
};

const NavigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    checkIfLandingPage(state, action) {
      state.isLandingPage = action.payload;
    },
  },
});

export const { checkIfLandingPage } = NavigationSlice.actions;
export default NavigationSlice.reducer;
