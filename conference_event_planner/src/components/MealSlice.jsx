import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mealList: [
    { name: "Breakfast", cost: 50, selected: false },
    { name: "High Tea", cost: 25, selected: false },
    { name: "Lunch", cost: 65, selected: false },
    { name: "Dinner", cost: 70, selected: false },
  ],
  totalNumber: 0,
};
const MealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleMealSelection(state, action) {
      const { payload: index } = action;
      state.mealList[index].selected = !state.mealList[index].selected;
    },
    setTotalNumber(state, action) {
      state.totalNumber = action.payload;
    },
  },
});

export const { toggleMealSelection, setTotalNumber } = MealSlice.actions;
export default MealSlice.reducer;
