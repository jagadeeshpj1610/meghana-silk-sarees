import express from "express"
import { createOrder } from "../controllers/cashfreeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const cashfreeRouter = express.Router();

cashfreeRouter.post("/create-order",authMiddleware, createOrder)

export default cashfreeRouter
