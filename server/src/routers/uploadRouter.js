import express from express;
import { photoUpload } from "../controllers/uploadController";
const uploadRouter = express.Router()

uploadRouter.get("/", (req, res)=> {
	res.json({})
})

export {
	uploadRouter,
}
