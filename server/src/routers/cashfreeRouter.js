import express from "express"
import { createOrder } from "../controllers/cashfreeController";
const cashfreeRouter = express.Router();

cashfreeRouter.post("/payment", createOrder)
