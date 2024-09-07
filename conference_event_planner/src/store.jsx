import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./components/NavigationSlice";
import venueSlice from "./components/VenueSlice";
import addsOnSlice from "./components/AddsOnSlice";
import mealSlice from "./components/MealSlice";
const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    venue: venueSlice,
    addsOn: addsOnSlice,
    meal: mealSlice,
  },
});

export default store;
