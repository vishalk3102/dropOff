import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

export const server = "http://localhost:3000/api/v1";
