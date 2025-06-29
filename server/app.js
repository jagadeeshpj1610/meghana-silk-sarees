import express from "express";
import connectToDB from "./src/config/db.js";
import cors from "cors";
import authRouter from "./src/routers/authRouter.js";
import cookieParser from "cookie-parser";
import cardRouter from "./src/routers/cardRouters.js";
import cartRouter from "./src/routers/cartRouter.js";
import cashfreeRouter from "./src/routers/cashfreeRouter.js";
import queryRouter from "./src/routers/queryRouter.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
app.set('trust proxy', 1);

connectToDB();

app.use(cors({
  origin:[
     'http://localhost:5173',
     'https://meghana-silk-sarees-sy6u.onrender.com'
  ] ,
  credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/cards', cardRouter);
app.use('/cart', cartRouter);
app.use('/payment', cashfreeRouter);
app.use('/query', queryRouter);


export default app;
