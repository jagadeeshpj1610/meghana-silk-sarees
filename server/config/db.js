import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB = () => {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongodb connected successfully"));
}

export default connectToDB;
