import uploadFunction from "../helpers/cloudinaryHelpers.js";
import fs from "fs";

const photoUpload = async (req, res) => {
  const result = await uploadFunction(req.file.path);
  console.log(result);
  res.json({file: req.file, result,message: "uploaded successfully"})  
}

export {
  photoUpload
}
