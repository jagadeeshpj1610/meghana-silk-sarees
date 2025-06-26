import { useState } from 'react';
import '../css/sarees.css'

const BuyButton = ({ sareeInfo }) => {
    const handleClickOnBuy = async () => {
        if (!navigator.onLine) {
            alert("You're offline");
            return;
        }
        const orderDetails = {
            orderId: `${sareeInfo._id}-${Date.now()}`,
            amount: sareeInfo.sareePrice,
        }
        const res = await fetch("http://localhost:8000/payment/create-order", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails),
        })
        const data = await res.json();
      const orderId = data.order_id || data.customer_details?.order_id;
        console.log(data)

        const cashfree = new window.Cashfree({
            mode: "sandbox",
        })

        cashfree.checkout({
            paymentSessionId: data.payment_session_id,
            redirectTarget: "_self",
            returnUrl: `http://localhost:5173/payment/${orderId}`,
        }).then((result)=> console.log(result))

    }


    return (
        <button className='buybtnn' onClick={handleClickOnBuy}>Buy</button>
    )
}

export default BuyButton