import cartModel from "../models/cartModel.js";

const addToCart = async (req, res) => {
  try{
    const card = req.body;
    const user = req.user.id;

    const userExist = await cartModel.findOne({user})

    if(!userExist){
      const postedCard = await cartModel.create({user, cards: [card]})
      return res.json(postedCard)
    }

    userExist.cards.push(card);
    userExist.save();

    res.json(userExist);

  } catch(err){
    console.log(err);
    res.status(400).json({message: "Internal server error"});
  }
}

const getAllCarts = async (req, res) => {
  try {
    const fetchedCart = await cartModel.find({user: req.user.id}).populate("user")
    // const fetchedPhoto = await cardModel.find({id: })
    res.json(fetchedCart)
  } catch (err) {
    console.log(err);
    res.status(400).json({message: "Internal server error"});
  }
}

const removeCart = (req, res) => {

}


export {
  addToCart,
  removeCart,
  getAllCarts,
}