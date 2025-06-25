import { createCashfreeOrder } from "../helpers/cashfreeHelper.js";

const createOrder = async (req, res) => {
  try {
    const {orderId, amount, customer} = req.body;
    const response = await createCashfreeOrder(orderId, amount, customer)
    res.json(response)
  } catch (err) {
    console.log(err);
    res.json({message: "Internal Server Error"})
  }
};

export {
  createOrder
}
