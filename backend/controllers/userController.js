const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/userModel");

exports.myProfile = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);

    res.clearCookie("connect.sid");
    res.status(200).json({
      message: "Logged Out",
    });
  });
};

exports.getAdminUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    success: true,
    users,
  });
});

exports.getAdminStats = catchAsyncError(async (req, res, next) => {
  const usersCount = await User.countDocuments();

  const orders = await Order.find({});

  const placedOrders = orders.filter(
    (i) => i.orderStatus === "Order Delivered"
  );
  const driverAssigned = orders.filter(
    (i) => i.orderStatus === "Driver Assigned"
  );
  const inTransitOrders = orders.filter((i) => i.orderStatus === "In Transit");
  const deliveredOrders = orders.filter(
    (i) => i.orderStatus === "Order Delivered"
  );

  let totalIncome = 0;
  orders.forEach((i) => {
    totalIncome += i.totalAmount;
  });

  res.status(200).json({
    success: true,
    usersCount,
    ordersCount: {
      total: orders.length,
      placedOrders: placedOrders.length,
      driverAssigned: driverAssigned.length,
      placed: inTransitOrders.length,
      placed: deliveredOrders.length,
    },
    totalIncome,
  });
});
