import express from "express";
import { uploadPhoto } from "../middlewares/uploadMiddlware2.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { deleteCard, fetchCard, updateCard, uploadCard } from "../controllers/cardController.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const cardRouter = express.Router();

cardRouter.post('/',authMiddleware, adminMiddleware, uploadMiddleware.single('saree-image'), uploadPhoto, uploadCard);
cardRouter.get('/', fetchCard);
cardRouter.put('/:id',authMiddleware, adminMiddleware, updateCard);
cardRouter.delete('/:id', authMiddleware, adminMiddleware, deleteCard)

export default cardRouter;
