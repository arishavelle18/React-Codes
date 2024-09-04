import { createSlice } from "react-redux";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
export const { decrement, increment } = CounterSlice.actions;
export default CounterSlice.reducers;
