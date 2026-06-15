import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementAction(state) {
      state.count += 1; 
    },
    decrementAction(state) {
      state.count -= 1; 
    }
  },
});

export const { incrementAction, decrementAction } = counterSlice.actions;

export default counterSlice.reducer;