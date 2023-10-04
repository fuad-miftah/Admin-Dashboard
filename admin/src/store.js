import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
//import authapiSlice from "./Slice/authapiSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    //authapi: authapiSlice,
  },
  devTools: true,
});
