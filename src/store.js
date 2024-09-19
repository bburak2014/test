import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },

  devTools: false,
});

export default store;
