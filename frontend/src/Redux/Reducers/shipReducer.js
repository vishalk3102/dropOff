import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  senderDetails: {
    name: "",
    hNo: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
    phoneNo: 0,
  },
  receiverDetails: {
    name: "",
    hNo: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
    phoneNo: 0,
  },
  shippingItems: {
    length: 0,
    width: 0,
    height: 0,
    quantity: 0,
    weight: 0,
  },
  shippingCharges: 100,
  totalAmount: 100,
};

export const shipReducer = createReducer(initialState, {
  addSenderInfo: (state, action) => {
    state.senderDetails = {
      name: action.payload.senderName,
      hNo: action.payload.senderHNo,
      city: action.payload.senderCity,
      state: action.payload.senderState,
      country: action.payload.senderCountry,
      pinCode: action.payload.senderPinCode,
      phoneNo: action.payload.senderPhoneNo,
    };
  },
  addReceiverInfo: (state, action) => {
    state.receiverDetails = {
      name: action.payload.receiverName,
      hNo: action.payload.receiverHNo,
      city: action.payload.receiverCity,
      state: action.payload.receiverState,
      country: action.payload.receiverCountry,
      pinCode: action.payload.receiverPinCode,
      phoneNo: action.payload.receiverPhoneNo,
    };
  },
  addPackageInfo: (state, action) => {
    state.shippingItems = {
      length: action.payload.length,
      width: action.payload.width,
      height: action.payload.height,
      quantity: action.payload.quantity,
      weight: action.payload.weight,
    };
  },

  calculatePrice: (state, action) => {
    state.shippingCharges = action.payload.shippingCharges;
    state.totalAmount = action.payload.totalAmount;
  },
  emptyState: (state) => {
    state.senderDetails = {
      name: "",
      hNo: "",
      city: "",
      state: "",
      country: "",
      pinCode: 0,
      phoneNo: 0,
    };
    state.receiverDetails = {
      name: "",
      hNo: "",
      city: "",
      state: "",
      country: "",
      pinCode: 0,
      phoneNo: 0,
    };
    state.shippingItems = {
      length: 0,
      width: 0,
      height: 0,
      quantity: 0,
      weight: 0,
    };
    state.shippingCharges = 0;
    state.totalAmount = 0;
  },
});
