import express from "express";
import { addToCart, getAllCarts, removeCart } from "../controllers/cartControllers.js";
const cartRouter = express.Router();

cartRouter.post('/', addToCart);
cartRouter.get('/', getAllCarts);
cartRouter.delete('/', removeCart);

export default cartRouter;
