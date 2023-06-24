const express = require("express");
const { isAuthenticated, authorizeAdmin } = require("../middlewares/auth");
const {
  placeOrder,
  getMyOrders,
  getOrderDetails,
  getAdminOrders,
  processOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/createorder", placeOrder);

router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);

router.get("/admin/orders", isAuthenticated, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, processOrder);

module.exports = router;
