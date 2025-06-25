import { createCashfreeOrder } from "../helpers/cashfreeHelper.js";

const createOrder = async (req, res) => {
  try {
    const {orderId, amount} = req.body;
    const customer = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone
    }
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
