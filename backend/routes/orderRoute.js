const express = require("express");
const { isAuthenticated, authorizeAdmin } = require("../middlewares/auth");
const {
  placeOrder,
  getMyOrders,
  getOrderDetails,
  getAdminOrders,
  processOrder,
  placeOrderOnline,
  paymentVerification,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/createorder", placeOrder);

router.post("/createorderonline", placeOrderOnline);

router.post("/paymentverification", paymentVerification);

router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);

router.get("/admin/orders", isAuthenticated, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, processOrder);

module.exports = router;
