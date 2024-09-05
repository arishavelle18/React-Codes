import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./components/NavigationSlice";
const store = configureStore({
  reducer: {
    navigation: navigationSlice,
  },
});

export default store;
