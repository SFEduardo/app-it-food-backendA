import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth.js";
import {
  createCheckOutSession,
  stripeWebHookHandler,
  getOrders,
  getRestaurantOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.get(
  "/",
  jwtCheck,
  jwtParse,
  getOrders,
);

router.get(
  "/order",
  jwtCheck,
  jwtParse,
  getRestaurantOrders,
);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  createCheckOutSession,
);

router.post("/checkout/webhook", stripeWebHookHandler);

router.patch(
  "/:orderId/status",
  jwtCheck,
  jwtParse,
  updateOrderStatus,
);

export default router;
