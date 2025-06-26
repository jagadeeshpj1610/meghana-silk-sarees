import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orders: [
    {
      orderId: {
        type: String,
        required: true,
        unique: true
      },
      card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
      },
    }
  ]
})

const transactionModel = mongoose.model('Transcations', transactionSchema);

export default transactionModel;
