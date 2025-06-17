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
  sareePhoto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photo",
    // type: String,
    required: true,
  }
})

const cardModel = mongoose.model("Card", cardSchema);

export default cardModel;
