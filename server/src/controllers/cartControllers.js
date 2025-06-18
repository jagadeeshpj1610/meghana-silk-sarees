import cartModel from "../models/cartModel.js";

const addToCart = async (req, res) => {
  try{
    const {card} = req.body;
    const user = req.user.id;
    // const found = await cartModel.find({card, user});
    // if(found){

    // }
    if(found){
      return res.status(400).json({message: "You already added this to cart"});
    }
    const addedSaree = await cartModel.create({card, user})
    
    res.json({addedSaree, message: "added successfully"})
  } catch(err){
    console.log(err);
    res.status(400).json({message: "Internal server error"});
  }
}

const getAllCarts = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
    res.status(400).json({message: "Internal server error"});
  }
  res.json({message: "cart router"})
}

const removeCart = (req, res) => {

}


export {
  addToCart,
  removeCart,
  getAllCarts,
}
