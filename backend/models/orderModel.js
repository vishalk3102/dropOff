const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  trackingID: {
    type: Number,
    required: true,
    unique: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  senderDetails: {
    name: {
      type: String,
      required: true,
    },
    hNo: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  receiverDetails: {
    name: {
      type: String,
      required: true,
    },
    hNo: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  shippingItems: {
    length: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },

  paymentMethod: {
    type: String,
    enum: ["Online"],
    default: "Online",
  },
  paymentInfo: {
    type: mongoose.Schema.ObjectId,
    ref: "Payment",
  },
  paidAt: Date,

  shippingcharges: {
    type: Number,
    default: 0,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  orderStatus: {
    type: String,
    enum: [
      "Order Placed",
      "Driver Assigned",
      "Order Picked Up",
      "In Transit",
      "Out for Delivery",
      "Order Delivered",
    ],
    default: "Order Placed",
  },
  Location: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
