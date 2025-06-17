import uploadFunction from "../helpers/cloudinaryHelpers.js";
import fs from "fs";

const photoUpload = (req, res) => {
  const result = uploadFunction(req.file.path);
    
}

export {
  photoUpload
}
