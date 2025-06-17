import uploadFunction from "../helpers/cloudinaryHelpers.js";
import photoModel from "../models/photoModel.js";
import fs from "fs";

const uploadPhoto = async (req, res) => {
  const result = await uploadFunction(req.file.path);
  fs.unlinkSync(req.file.path);
  await photoModel.create({photoId: result.public_id, url: result.secure_url});

  res.json({file: req.file, result,message: "uploaded successfully"})
}

const fetchPhoto = async (req, res) => {
  const photos = await photoModel.find({});
  res.json({photos})
}

export {
  uploadPhoto,
  fetchPhoto,
}
