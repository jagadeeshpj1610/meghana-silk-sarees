import express from "express";
import { isAdmin, isLoggedIn, login, logout, signup } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const authRouter = express.Router();


authRouter.post('/login', login);
authRouter.post('/signup', signup);
authRouter.post('/logout', logout);
authRouter.get('/isLoggedIn', isLoggedIn);
authRouter.get('/isAdmin', authMiddleware, isAdmin);


export default authRouter;
