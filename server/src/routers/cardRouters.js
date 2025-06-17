import express from "express";
import { uploadPhoto } from "../middlewares/uploadMiddlware2.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import uploadCard from "../controllers/cardController.js";
const cardRouter = express.Router();

// cardRouter.post('/',authMiddleware, uploadMiddleware.single('saree-image'), uploadPhoto, uploadCard)
cardRouter.post('/',uploadCard)

export default cardRouter;
