import express from "express";
import { login, logout, signup } from "../controllers/authController.js";
const authRouter = express.Router();


authRouter.post('/login', login)
authRouter.post('/signup', signup)
authRouter.post('/logout', logout);


export default authRouter;
