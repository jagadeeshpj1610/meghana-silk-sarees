import cartModel from "../models/cartModel.js";

const addToCart = (req, res) => {

}

const getAllCarts = (req, res) => {
  res.json({message: "cart router"})
}

const removeCart = (req, res) => {

}


export {
  addToCart,
  removeCart,
  getAllCarts,
}
