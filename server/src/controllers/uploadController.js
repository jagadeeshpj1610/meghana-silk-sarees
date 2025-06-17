import uploadFunction from "../helpers/cloudinaryHelpers";

const photoUpload = (req, res) => {
  const file = req.file;
  res.json(file)
}

export {
  photoUpload
}
