import express from "express";
import { photoUpload } from "../controllers/uploadController.js";
import uploadMiddleware from "../../middlewares/uploadMiddleware.js";
const uploadRouter = express.Router();

uploadRouter.post("/", uploadMiddleware.single('saree-image'),photoUpload)

export {
	uploadRouter,
}
