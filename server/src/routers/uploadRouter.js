import express from "express";
import { uploadPhoto, fetchPhoto } from "../controllers/uploadController.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const uploadRouter = express.Router();

uploadRouter.post("/", authMiddleware, uploadMiddleware.single('saree-image'), uploadPhoto)
uploadRouter.get("/", fetchPhoto)

export {
	uploadRouter,
}
