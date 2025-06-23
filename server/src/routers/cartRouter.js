import express from "express";
import { addToCart, getCardsInCart, removeACardFromCart } from "../controllers/cartControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const cartRouter = express.Router();

cartRouter.post('/', authMiddleware, addToCart);
cartRouter.get('/', authMiddleware, getCardsInCart);
cartRouter.delete('/',authMiddleware, removeACardFromCart);

export default cartRouter;
