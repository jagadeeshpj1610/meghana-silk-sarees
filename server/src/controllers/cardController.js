import cardModel from "../models/cardModel.js";
import mongoose from "mongoose";
import cartModel from "../models/cartModel.js";
import transactionModel from "../models/transactionModel.js";

const uploadCard = async (req, res) => {
  try {

    const { sareeName, sareePrice, sareeDiscription } = req.body;
    const sareePhoto = res.uploadedPhoto.id;
    if (!sareeName || !sareePrice || !sareePhoto || !sareeDiscription) {
      return res.status(400).json({ message: "Saree name, saree price, saree photo and saree discription is required" })
    }
    if (!sareeName.match(/^[a-zA-Z ]+$/)) {
      return res.status(400).json({ message: "Saree name must be letters" })
    }
    if (!String(sareePrice).match(/^\d+(\.\d{1,2})?$/)) {
      return res.status(400).json({ message: "Saree Price must be numbers" })
    }
    if (sareeDiscription.length > 250) {
      return res.status(400).json({ message: "Saree Discription must be below length of 250" });
    }
    console.log(sareeDiscription)

    const uploadedCard = await cardModel.create({ sareeName, sareePrice, sareePhoto, sareeDiscription });

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
    const { sareeName, sareePrice, sareeDiscription } = req.body;

    const updateFields = {
      sareeName,
      sareePrice,
      sareeDiscription,
    };
  
    if (res.uploadedPhoto && res.uploadedPhoto.id) {
      updateFields.sareePhoto = res.uploadedPhoto.id;
    }
    if (!sareeName || !sareePrice || !sareeDiscription) {
      return res.status(400).json({ message: "sareeName, sareePrice are required" });
    }

    const card = await cardModel.findByIdAndUpdate(cardId, updateFields, { new: true }).populate("sareePhoto");

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
    const cardIdObject = new mongoose.Types.ObjectId(cardId);
    await transactionModel.updateMany({},
      {
        $pull: {
          orders: {
            card: cardIdObject
          }
        },
      },
    )

    await cartModel.updateMany({},
      {
        $pull: {
          cards: {
            card: cardIdObject
          }
        },
      },
    )
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
