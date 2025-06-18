import express from "express";
import { addToCart, getAllCarts, removeCart } from "../controllers/cartControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const cartRouter = express.Router();

cartRouter.post('/',authMiddleware, addToCart);
cartRouter.get('/', getAllCarts);
cartRouter.delete('/', removeCart);

export default cartRouter;
