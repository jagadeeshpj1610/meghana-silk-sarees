import cloudinary from "../config/cloudinary.js";

const uploadFunction = async (filePath) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath)
    return uploadResult;
  } catch (error) {
    console.log(error);
  }
}

const deleteFunction = async (publicId) => {
  try {
    const deleteResult = await cloudinary.uploader.destroy(publicId);
    return deleteResult;
  } catch(err){
    console.log(err);
  }
}


export {
  uploadFunction,
  deleteFunction,
};
