import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/userReducer";
import { shipReducer } from "./Reducers/shipReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ship: shipReducer,
  },
});

export default store;

export const server = "https://drop-off.vercel.app/api/v1";
