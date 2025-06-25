import dotenv from "dotenv";
import { createCashfreeOrder } from "../helpers/cashfreeHelper.js";
import transactionModel from "../models/transactionModel.js";
import { response } from "express";
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
    const response = await createCashfreeOrder(orderId, amount, customer);
    const userExist = await transactionModel.findOne({user: req.user.id});
    if(!userExist){
      const createdDocument = transactionModel.create({user: req.user.id, orders: [{orderId}]});
      return res.json(createdDocument);
    }
    userExist.orders.push({orderId: response.order_id});
    userExist.save();
    console.log(response)
    res.json(response)
  } catch (err) {
    console.log(err);
    res.json({message: "Internal Server Error"})
  }
};

const verifyPayment = async (req, res) => {
  const {orderId} = req.params;
  const response = await fetch(`https://sandbox.cashfree.com/pg/orders/${orderId}/payments`, {
    headers: {
      'x-client-id': process.env.CASHFREE_APP_ID,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY,
      'x-api-version': "2022-09-01"
    }
  });
  const data = await response.json();
  res.json(data[0].payment_status);
}

export {
  createOrder,
  verifyPayment
}
