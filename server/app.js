import express from "express";
import connectToDB from "./src/config/db.js";
import { uploadRouter } from "./src/routers/uploadRouter.js";
const app = express();

connectToDB();

app.use(express.json());
app.use('/upload',uploadRouter);

app.get('/', (req, res) => {
  res.json({message:"Welcome to my routes"});
})

export default app;
