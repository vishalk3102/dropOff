const Order = require("../models/orderModel");
const Payment = require("../models/paymentModel");
const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const instance = require("../razorpay");

exports.placeOrder = catchAsyncError(async (req, res, next) => {
  const {
    trackingID,
    address_from,
    address_to,
    shippingItems,
    paymentMethod,
    itemsPrice,
    shippingcharges,
    totalAmount,
  } = req.body;

  const user = "req.user._id";

  const orderOptions = {
    trackingID,
    address_from,
    address_to,
    shippingItems,
    paymentMethod,
    itemsPrice,
    shippingcharges,
    totalAmount,
    user,
  };

  await Order.create(orderOptions);
  res.status(201).json({
    success: true,
    message: "Order succesfully via cash",
  });
});

// exports.placeOrder = async (req, res, next) => {
//   const {
//     trackingID,
//     address_from,
//     address_to,
//     shippingItems,
//     paymentMethod,
//     itemsPrice,
//     shippingcharges,
//     totalAmount,
//   } = req.body;

//   const user = req.user._id;

//   const orderOptions = {
//     trackingID,
//     address_from,
//     address_to,
//     shippingItems,
//     paymentMethod,
//     itemsPrice,
//     shippingcharges,
//     totalAmount,
//     user,
//   };

//   const options = {
//     amount: Number(totalAmount) * 100,
//     currency: "INR",
//   };

//   const order = await instance.orders.create(options);
//   res.status(201).json({
//     success: true,
//     order,
//     orderOptions,
//   });
// };

exports.getMyOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({
    user: "req.user._id",
  }).populate("user", "name");
  res.status(200).json({
    success: true,
    orders,
  });
});

exports.getOrderDetails = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("user", "name");

  if (!order) {
    return next(new ErrorHandler("Invalid Order Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

exports.getAdminOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({}).populate("user", "name");

  res.status(200).json({
    success: true,
    orders,
  });
});

exports.processOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Invalid Order Id", 404));
  }

  if (order.orderStatus === "Order Placed") {
    order.orderStatus = "Driver Assigned";
  } else if (order.orderStatus === "Driver Assigned") {
    order.orderStatus = "Order Picked Up";
  } else if (order.orderStatus === "Order Picked Up") {
    order.orderStatus = "In Transit";
  } else if (order.orderStatus === "In Transit") {
    order.orderStatus = "Out for Delivery";
  } else if (order.orderStatus === "Out for Delivery") {
    order.orderStatus = "Order Delivered";
    order.deliveredAt = Date.now();
  } else if (order.orderStatus === "Order Delivered") {
    next(new ErrorHandler("Order already Delivered", 400));
  }
  console.log(order.orderStatus);
  await order.save();
  res.status(200).json({
    success: true,
    message: "Status updated succesfully",
  });
});
