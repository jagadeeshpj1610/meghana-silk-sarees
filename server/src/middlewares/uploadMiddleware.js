import multer from 'multer';
import fs from "fs"
import path from "path"

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads", { recursive: true });
    }
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  } else {
    cb(new Error('Not an image!'))
  }
}

export default multer({
  storage: storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
})
