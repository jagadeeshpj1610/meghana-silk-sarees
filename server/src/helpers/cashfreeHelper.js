import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { CASHFREE_APP_ID, CASHFREE_SECRET_KEY, CASHFREE_ENV } = process.env;
const BASE_URL = CASHFREE_ENV === 'sandbox' ? 'https://sandbox.cashfree.com/pg' : 'https://api.cashfree.com/pg';

const createCashfreeOrder = async (orderId, amount, customer) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-version': '2022-09-01',
    'x-client-id': CASHFREE_APP_ID,
    'x-client-secret': CASHFREE_SECRET_KEY
  };

  const body = {
    order_id: orderId,
    order_amount: amount,
    order_currency: 'INR',
    customer_details: {
      customer_id: customer.id,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone
    }, order_meta: {
      return_url: `https://meghana-silk-sarees-sy6u.onrender.com/payment-details/${orderId}`
    }
  };

  const res = await axios.post(`${BASE_URL}/orders`, body, { headers });
  return res.data;
}

const fetchPaymentDetails = async (orderId) => {
  const response = await fetch(`https://sandbox.cashfree.com/pg/orders/${orderId}/payments`, {
    headers: {
      'x-client-id': process.env.CASHFREE_APP_ID,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY,
      'x-api-version': "2022-09-01"
    }
  });
  const data = await response.json();
  return data;
}

export {
  createCashfreeOrder,
  fetchPaymentDetails
}
