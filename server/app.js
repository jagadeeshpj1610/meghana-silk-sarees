import express from "express";
import connectToDB from "./src/config/db.js";
import { uploadRouter } from "./src/routers/uploadRouter.js";
import cors from "cors";
const app = express();

connectToDB();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}))

app.use(express.json());
app.use('/upload',uploadRouter);

app.get('/', (req, res) => {
  res.json({message:"Welcome to my routes"});
})

export default app;
