import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  // address: {
  //   required: true,
  //   type: String,
  // },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  }
})

const userModel = mongoose.model('User', userSchema);

export default userModel;
