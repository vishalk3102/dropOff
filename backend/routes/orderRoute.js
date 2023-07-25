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
  trackOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/createorder", placeOrder);

router.post("/createorderonline", placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
router.get("/track/:id", isAuthenticated, trackOrder);

router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

module.exports = router;
