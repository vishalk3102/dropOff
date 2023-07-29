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

    res.clearCookie("connect.sid", {
      secure: process.env.NODE_ENV === "development" ? false : true,
      httpOnly: process.env.NODE_ENV === "development" ? false : true,
      sameSite: process.env.NODE_ENV === "development" ? false : "none",
    });
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

  const placedOrders = orders.filter((i) => i.orderStatus === "Order Placed");
  const inTransitOrders = orders.filter((i) => i.orderStatus === "In Transit");
  const deliveredOrders = orders.filter(
    (i) => i.orderStatus === "Order Delivered"
  );

  let totalIncome = 0;
  orders.forEach((i) => {
    totalIncome += i.totalAmount;
  });

  // console.log(totorders.lengthal);
  // console.log(placedOrders.length);
  // console.log(inTransitOrders.length);
  // console.log(deliveredOrders.length);

  res.status(200).json({
    success: true,
    usersCount,
    ordersCount: {
      total: orders.length,
      placed: placedOrders.length,
      transit: inTransitOrders.length,
      delivered: deliveredOrders.length,
    },
    totalIncome,
  });
});

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    next(new ErrorHandler(`User Doesn't exist with id:${req.params.id}`, 400));
  }
  await User.findByIdAndDelete(req.params.id);
  // await User.deleteOne(user);
  //
  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
