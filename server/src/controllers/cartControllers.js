import mongoose from "mongoose";
import cartModel from "../models/cartModel.js";

const addToCart = async (req, res) => {
  try {
    const { cardId } = req.body;
    const user = req.user.id;

    const ObjectIdCard = new mongoose.Types.ObjectId(cardId)
    const userExist = await cartModel.findOne({ user })

    if (!userExist) {
      const postedCard = await cartModel.create({ user, cards: [{ card: cardId, quantity: 1 }] })
      return res.json(postedCard)
    }
    await cartModel.updateOne(
      { user: req.user.id },
      { $pull: { cards: { card: null } } }
    );

    const isElementExist = userExist.cards.findIndex((element) => element.card.equals(ObjectIdCard))
    if (isElementExist === -1) {
      userExist.cards.push({ card: cardId, quantity: 1 })
      await userExist.save();
      return res.status(201).json({ userExist, message: "new card is created successfully" })
    }
    userExist.cards[isElementExist].quantity += 1;
    await userExist.save();

    res.json(userExist);

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
}

const getCardsInCart = async (req, res) => {
  try {
    const fetchedCart = await cartModel.findOne({ user: req.user.id }).populate("user").populate({
      path: "cards.card",
      populate: {
        path: "sareePhoto",
        model: "Photo"
      }
    })
    // const fetchedPhoto = await cardModel.find({id: })
    res.json(fetchedCart)
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
}

const removeACardFromCart = async (req, res) => {
  try {
    const { cardId } = req.body;
    const user = req.user.id;
    console.log(user, cardId)
    const cardIdObject = new mongoose.Types.ObjectId(cardId)

    const afterDeletedCart = await cartModel.findOneAndUpdate({ user },
      {
        $pull: {
          cards: {
            card: cardIdObject
          }
        },
      }, { new: true },
    )
    if (!afterDeletedCart) {
      return res.status(400).json({ message: "Not found" })
    }
    res.json(afterDeletedCart)

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
}


export {
  addToCart,
  removeACardFromCart,
  getCardsInCart,
}