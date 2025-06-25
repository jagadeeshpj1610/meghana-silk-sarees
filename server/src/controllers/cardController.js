import cardModel from "../models/cardModel.js";
import mongoose from "mongoose";

const uploadCard = async (req, res) => {
  try {

    const { sareeName, sareePrice } = req.body;
    const sareePhoto = res.uploadedPhoto.id;
    if (!sareeName || !sareePrice || !sareePhoto) {
      return res.status(400).json({ message: "Saree name, saree price and saree photo is required" })
    }
    if (!sareeName.match(/^[a-zA-Z ]+$/)) {
      return res.status(400).json({ message: "Saree name must be letters" })
    }
    if (!String(sareePrice).match(/^\d+(\.\d{1,2})?$/)) {
      return res.status(400).json({ message: "Saree Price must be numbers" })
    }
    const uploadedCard = await cardModel.create({ sareeName, sareePrice, sareePhoto });
    res.json({ uploadedCard, message: "new card is created successfully" })
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" })
  }
}

const fetchCard = async (req, res) => {
  try {

    const cards = await cardModel.find({}).populate('sareePhoto')
    res.json({ cards, message: "fetched successfully" })

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" })
  }
}

const updateCard = async (req, res) => {
  try {
    const cardId = req.params.id;
    const { sareeName, sareePrice } = req.body;
    // const sareePhoto = res.uploadedPhoto.id;

    const updateFields = {
      sareeName,
      sareePrice,
    };
    if (res.uploadedPhoto && res.uploadedPhoto.id) {
      updateFields.sareePhoto = res.uploadedPhoto.id;
    }
    if (!sareeName || !sareePrice) {
      return res.status(400).json({ message: "sareeName, sareePrice are required" });
    }
    const card = await cardModel.findByIdAndUpdate(cardId, updateFields, { new: true })
    if (!card) {
      return res.status(400).json({ message: "This card is not found" })
    }
    res.json({ card, message: "Updated successfully" });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
}

const deleteCard = async (req, res) => {
  try {

    const cardId = req.params.id;
    const deletedCard = await cardModel.findByIdAndDelete(cardId);
    if (!deletedCard) {
      return res.status(400).json({ message: "This card is not found" });
    }

    res.json({ deletedCard, message: "Saree is deleted successfully" });

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
}

export {
  uploadCard,
  fetchCard,
  updateCard,
  deleteCard,
};
