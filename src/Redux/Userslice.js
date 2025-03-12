import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
    isvalue: false,
  },
  reducers: {
    Increament: (state) => {
      state.value += 1;
    },
    Decreament: (state) => {
      if (state.value !== 0) {
        state.value -= 1;
      }
    },
  },
});

export default userSlice.reducer;
export const { Increament, Decreament } = userSlice.actions;
