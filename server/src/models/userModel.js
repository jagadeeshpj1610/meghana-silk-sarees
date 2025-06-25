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
    unique: true
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: 'you are not authorised'
    },
    default: 'user',
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  }
})

const userModel = mongoose.model('User', userSchema);

export default userModel;
