import express from "express";
import { photoUpload } from "../controllers/uploadController.js";
import multer from 'multer';
const uploadRouter = express.Router();

uploadRouter.post("/", (req, res)=> {
	res.json({message: "hi friends"})
})

export {
	uploadRouter,
}
