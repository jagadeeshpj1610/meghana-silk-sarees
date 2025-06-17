import express from "express";
import { uploadPhoto } from "../middlewares/uploadMiddlware2.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { fetchCard, uploadCard } from "../controllers/cardController.js";

const cardRouter = express.Router();

cardRouter.post('/', uploadMiddleware.single('saree-image'), uploadPhoto, uploadCard);
cardRouter.get('/', fetchCard);

export default cardRouter;
