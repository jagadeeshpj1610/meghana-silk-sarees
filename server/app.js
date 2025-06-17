import express from "express";
import connectToDB from "./src/config/db.js";
import { uploadRouter } from "./src/routers/uploadRouter.js";
import cors from "cors";
import authRouter from "./src/routers/authRouter.js";
import cookieParser from "cookie-parser";
const app = express();

connectToDB();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}))

app.use(express.json());
app.use(cookieParser());
app.use('/upload',uploadRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json({message:"Welcome to my routes"});
})

export default app;
