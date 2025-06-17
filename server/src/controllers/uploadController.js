import uploadFunction from "../helpers/cloudinaryHelpers.js";

const photoUpload = (req, res) => {
  const file = req.file;
  res.json(file)
}

export {
  photoUpload
}
