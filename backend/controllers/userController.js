const User = require('../models/userModel')
const Order = require('../models/orderModel')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const nodemailer = require('nodemailer')

exports.myProfile = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user
  })
})

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) return next(err)

    res.clearCookie('connect.sid', {
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? false : 'none'
    })
    res.status(200).json({
      message: 'Logged Out'
    })
  })
}

// exports.submitContactForm = (req, res, next) => {
//   const { name, email, phone, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"Contact Form" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,
//     subject: "New Contact Form Submission",
//     html: `<h3>Name: ${name}</h3> <br/><p>Email: ${email}</p><br/><p>Phone Nymber: ${phone}</p><br/><p>Message: ${message}</p>`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error sending email" });
//     } else {
//       console.log("Email sent: " + info.response);
//       res.status(200).json({ message: "Email sent successfully" });
//     }
//   });

//   res.status(200).json({
//     message: "Email sent successfully",
//   });
// };

exports.getAdminUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find({})
  res.status(200).json({
    success: true,
    users
  })
})

exports.getAdminStats = catchAsyncError(async (req, res, next) => {
  const usersCount = await User.countDocuments()

  const orders = await Order.find({})

  const placedOrders = orders.filter(i => i.orderStatus === 'Order Placed')
  const inTransitOrders = orders.filter(i => i.orderStatus === 'In Transit')
  const deliveredOrders = orders.filter(
    i => i.orderStatus === 'Order Delivered'
  )

  let totalIncome = 0
  orders.forEach(i => {
    totalIncome += i.totalAmount
  })

  console.log(orders.length)
  console.log(placedOrders.length)
  console.log(inTransitOrders.length)
  console.log(deliveredOrders.length)

  res.status(200).json({
    success: true,
    usersCount,
    ordersCount: {
      total: orders.length,
      placed: placedOrders.length,
      transit: inTransitOrders.length,
      delivered: deliveredOrders.length
    },
    totalIncome
  })
})

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    next(new ErrorHandler(`User Doesn't exist with id:${req.params.id}`, 400))
  }
  await User.findByIdAndDelete(req.params.id)

  const users = await User.find({})
  res.status(200).json({
    success: true,
    users,
    message: 'User Deleted Successfully'
  })
})
