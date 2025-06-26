import express from "express"
import { createOrder, getUserTransactions, paymentDetails } from "../controllers/cashfreeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const cashfreeRouter = express.Router();

cashfreeRouter.get("/",authMiddleware, getUserTransactions);
cashfreeRouter.post("/create-order",authMiddleware, createOrder);
cashfreeRouter.get("/payment-details/:orderId",authMiddleware, paymentDetails);

export default cashfreeRouter
