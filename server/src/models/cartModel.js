import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  cards: [
    {
      card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
        required: true,
        unique: true,
      },
      quantity: Number,
    }
  ]
})

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
