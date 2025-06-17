import cloudinary from "../config/cloudinary.js";

const uploadFunction = async (filePath) => {
  const uploadResult = await cloudinary.uploader.upload(filePath)
  return uploadResult;
}

export default uploadFunction;
