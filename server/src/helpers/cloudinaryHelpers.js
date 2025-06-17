import cloudinary from "../config/cloudinary.js";

const uploadFunction = async (filePath) => {
  const uploadResult = await cloudinary.uploader
    .upload(theFile)
    .then(()=>console.log("successfully uploaded"))
    .catch((err)=> console.log("Error in uploading:", err));
  return uploadResult;
}

export default uploadFunction;
