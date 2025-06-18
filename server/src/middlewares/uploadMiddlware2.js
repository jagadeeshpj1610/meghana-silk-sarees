import {uploadFunction} from "../helpers/cloudinaryHelpers.js";
import photoModel from "../models/photoModel.js";
import fs from "fs";

const uploadPhoto = async (req, res, next) => {
  try {
    if(!req.file){
      return res.status(400).json({message: "Upload the file"});
    }
    const result = await uploadFunction(req.file.path);
    fs.unlinkSync(req.file.path);
    const createdPhoto = await photoModel.create({ photoId: result.public_id, url: result.secure_url });
    res.uploadedPhoto = createdPhoto;
    next();
  } catch (err) {
    console.log(err);
    // if (err.error.errno === -3008) {
    //   return res.status(400).json({message: `Yo bro, You are offline`});
    // }
    res.status(400).json({ message: "Internal Server Error" });
  }
  // res.json({file: req.file, result,message: "uploaded successfully"})
}

// const fetchPhoto = async (req, res) => {
//   const photos = await photoModel.find({});
//   res.json({photos})
// }

export {
  uploadPhoto,
  // fetchPhoto,
}
