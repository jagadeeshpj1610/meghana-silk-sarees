import mongoose, { mongo } from "mongoose";

const cardSchema = mongoose.Schema({
  sareeName: {
    type: String,
    required: true,
  },
  sareePrice: {
    type: String,
    required: true,
  },
  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photo",
    required: true,
  }
})
