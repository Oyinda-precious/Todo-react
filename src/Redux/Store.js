import { configureStore } from "@reduxjs/toolkit";
import userlice from "./Userslice";
import fetchslice from "./Fetchslice";

export default configureStore({
  reducer: {
    userlice,
    fetchslice,
  },
});
