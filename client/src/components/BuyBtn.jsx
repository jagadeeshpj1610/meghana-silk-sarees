import { useState } from 'react';
import '../css/sarees.css'
import { useNavigate } from 'react-router-dom';

const BuyButton = ({ sareeInfo, isLoggedIn }) => {
    const navigate = useNavigate()
    const [isClicked, setIsClicked] = useState(false);
    const handleClickOnBuy = async () => {
        setIsClicked(true);

        if (!isLoggedIn) {
            navigate('/login')
        }

        if (!navigator.onLine) {
            alert("You're offline");
            return;
        }
        const orderDetails = {
            cardId: sareeInfo._id,
            orderId: `${sareeInfo._id}-${Date.now()}`,
            amount: sareeInfo.sareePrice,
        }
        const res = await fetch("https://meghana-silk-sarees-3ufw.onrender.com/payment/create-order", {
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
            returnUrl: `http://localhost:5173/payment-details/${orderId}`,
        }).then((result) => console.log(result))

    }
    console.log(isClicked)


    return (
        <button className='buybtnn' disabled={isClicked} onClick={handleClickOnBuy}>Buy</button>
    )
}

export default BuyButton