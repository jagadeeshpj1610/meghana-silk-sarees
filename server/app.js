import express from "express";
import connectToDB from "./config/db.js";
const app = express();

connectToDB();

app.get('/', () => {
  console.log("Welcome to my routes");
})

export default app;
