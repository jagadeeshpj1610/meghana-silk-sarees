import express from "express"
import { createOrder } from "../controllers/cashfreeController.js";
const cashfreeRouter = express.Router();

cashfreeRouter.post("/", createOrder)

export default cashfreeRouter
