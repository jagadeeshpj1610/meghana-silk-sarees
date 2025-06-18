import { deleteFunction } from "../helpers/cloudinaryHelpers.js";
import cardModel from "../models/cardModel.js";
import photoModel from "../models/photoModel.js";

const deleteMiddleware = async (req, res, next) => {
  try{

    const card = await cardModel.findById(req.params.id);
    if(!card){
      return res.status(400).json({message: "This card is not found"});
    }
    const photo = await photoModel.findById(card.sareePhoto);
    if(!photo){
      return res.status(400).json({message: "This photo is not found"});
    }
    const deletedPhoto = await deleteFunction(photo.photoId);
    if(deletedPhoto.result === 'not found'){
      res.status(400).json({message: "This photo is already deleted"});
    }
    console.log(deletedPhoto)
    next()
  }catch(err){
    console.log(err);
    res.status(400).json({message: "Internal server error"});
  }
}

export default deleteMiddleware;
