import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { orders: [], users: [] },
  {
    getDashboardStatsRequest: (state) => {
      state.loading = true;
    },
    getDashboardStatsSuccess: (state, action) => {
      state.loading = false;
      state.usersCount = action.payload.usersCount;
      state.ordersCount = action.payload.ordersCount;
      state.totalIncome = action.payload.totalIncome;
    },
    getDashboardStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAdminUsersRequest: (state) => {
      state.loading = true;
    },
    getAdminUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAdminUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAdminOrdersRequest: (state) => {
      state.loading = true;
    },
    getAdminOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getAdminOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    processOrderRequest: (state) => {
      state.loading = true;
    },
    processOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    processOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.users = action.payload.users;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserReset: (state, action) => {
      state.loading = false;
      state.isDeleted = false;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
