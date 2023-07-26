import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/userReducer";
import { shipReducer } from "./Reducers/shipReducer";
import { orderReducer, ordersReducer } from "./Reducers/orderReducer";
import { adminReducer } from "./Reducers/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ship: shipReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = "https://drop-off.vercel.app/api/v1";
