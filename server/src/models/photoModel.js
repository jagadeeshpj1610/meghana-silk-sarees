import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
  photoId: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String,
  },
})

const photoModel = mongoose.model('Photo', photoSchema);

export default photoModel;
