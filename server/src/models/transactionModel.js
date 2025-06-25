import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orders: [
    {
      orderId: {
        type: String,
        required: true,
        unique: true
      }
    }
  ]
})
