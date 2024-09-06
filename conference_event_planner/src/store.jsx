import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./components/NavigationSlice";
import venueSlice from "./components/VenueSlice";
const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    venue: venueSlice,
  },
});

export default store;
