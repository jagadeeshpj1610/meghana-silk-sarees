import express from "express";
import { login, signup } from "../controllers/authController.js";
const authRouter = express.Router();

<<<<<<< HEAD
authRouter.post('/login', login)
authRouter.post('/signup', signup)
=======
// authRouter.post('/login', )
// authRouter.post('/signup', )
>>>>>>> 6ada71a (PJ |  test the upload saree image)

export default authRouter;
