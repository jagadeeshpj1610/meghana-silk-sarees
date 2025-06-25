import dotenv from "dotenv";
import { createCashfreeOrder } from "../helpers/cashfreeHelper.js";
dotenv.config();

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

const verifyPayment = async (req, res) => {
  const response = await fetch("https://sandbox.cashfree.com/pg/orders/68528d43a487e213e0de219b-1750844932529/payments", {
    headers: {
      'x-client-id': process.env.CASHFREE_APP_ID,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY,
      'x-api-version': "2022-09-01"
    }
  });
  const data = await response.json();
  res.json(data)
}

export {
  createOrder,
  verifyPayment
}
