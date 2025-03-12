import { createSlice } from "@reduxjs/toolkit";

const fetchslice = createSlice({
  name: "fetch",
  initialState: {
    isloading: false,
    alluser: [],
    fetcherror: null,
  },
  reducers: {
    isfetching: (state) => {
      state.isloading = true;
      state.alluser = [];
      state.fetcherror = null;
    },
    Fetchingsuccessfull: (state, action) => {
      state.isloading = false;
      state.alluser = action.payload;
      state.fetcherror = null;
    },
    Fetchingfailed: (state, action) => {
      state.isloading = false;
      state.alluser = [];
      state.fetcherror = action.payload;
    },
  },
});
export default fetchslice.reducer;
export const { isfetching, Fetchingfailed, Fetchingsuccessfull } =
  fetchslice.actions;
