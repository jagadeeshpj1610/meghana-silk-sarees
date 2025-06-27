import express from "express";
import connectToDB from "./src/config/db.js";
import cors from "cors";
import authRouter from "./src/routers/authRouter.js";
import cookieParser from "cookie-parser";
import cardRouter from "./src/routers/cardRouters.js";
import cartRouter from "./src/routers/cartRouter.js";
import cashfreeRouter from "./src/routers/cashfreeRouter.js";
import searchRouter from "./src/routers/searchRouter.js";
const app = express();

connectToDB();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/cards', cardRouter);
app.use('/cart', cartRouter);
app.use('/payment', cashfreeRouter);
app.use('/search',searchRouter);

app.get('/', (req, res) => {
  res.json({message:"Welcome to my routes"});
})

export default app;
