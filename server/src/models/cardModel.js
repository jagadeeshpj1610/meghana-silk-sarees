import mongoose, { mongo } from "mongoose";

const cardSchema = mongoose.Schema({
  sareeName: {
    type: String,
    required: true,
  },
  sareePrice: {
    type: Number,
    required: true,
  },
  sareePhoto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photo",
    required: true,
  },
  sareeDiscription: {
    type: String,
    required: true
  }
})

const cardModel = mongoose.model("Card", cardSchema);

export default cardModel;
