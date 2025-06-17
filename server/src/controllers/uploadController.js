import uploadFunction from "../helpers/cloudinaryHelpers.js";
import photoModel from "../../models/photoModel.js";
import fs from "fs";

const photoUpload = async (req, res) => {
  const result = await uploadFunction(req.file.path);
  fs.unlinkSync(req.file.path);
  const photoToDB = await photoModel.create({photoId: result.public_id, url: result.secure_url});

  console.log(result);
  res.json({file: req.file, result,message: "uploaded successfully"})  
}

export {
  photoUpload
}
