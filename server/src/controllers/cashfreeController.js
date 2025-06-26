import dotenv, { populate } from "dotenv";
import { createCashfreeOrder, fetchPaymentDetails } from "../helpers/cashfreeHelper.js";
import transactionModel from "../models/transactionModel.js";

dotenv.config();

const createOrder = async (req, res) => {
  try {
    const { orderId, amount, cardId } = req.body;
    const customer = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone
    }

    if (!orderId || !amount || !cardId) {
      return res.status(400).json({ message: "Please provide orderId, amount and cardId" })
    }

    const response = await createCashfreeOrder(orderId, amount, customer);
    const userExist = await transactionModel.findOne({ user: req.user.id });
    if (!userExist) {
      const createdDocument = transactionModel.create({ user: req.user.id, orders: [{ orderId: response.order_id, card: cardId }] });
      return res.json(createdDocument);
    }
    userExist.orders.push({ orderId: response.order_id, card: cardId });
    userExist.save();
    res.json(response)
  } catch (err) {
    console.log(err);
    res.json({ message: "Internal Server Error" })
  }
};

const getUserTransactions = async (req, res) => {
  try {
    const userTransactions = await transactionModel.findOne({ user: req.user.id }).populate("user").populate({
      path: "orders.card",
      populate: {
        path: "sareePhoto",
        model: "Photo",
      }
    });

    if (!userTransactions) {
      return res.json({ message: "No transaction found for this user" });
    }
    res.json(userTransactions)
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
}

const paymentDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      return res.status(404).json({ message: "OrderId is required" });
    }
    const data = await fetchPaymentDetails(orderId);
    if (!data.length) {
      return res.json({ message: "This transaction is not found" });
    }
    res.json(data[0]);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
}

export {
  createOrder,
  paymentDetails,
  getUserTransactions,
}
