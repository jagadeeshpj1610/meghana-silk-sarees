import '../css/sarees.css'

const BuyButton = ({ sareeInfo }) => {
    const handleClickOnBuy = async () => {
        // if (!window.Cashfree || typeof window.Cashfree.checkout !== "function") {
        //     alert("Cashfree SDK not loaded yet!");
        //     return;
        // }
        // console.log(sareeInfo)
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
        console.log(data)

        const cashfree = new window.Cashfree({
            mode: "sandbox", //or production
        })

        cashfree.checkout({
            paymentSessionId: data.payment_session_id,
            redirectTarget: "_self",
            returnUrl: "http://localhost:5173/",
        });

    }


    return (
        <button className='buybtnn' onClick={handleClickOnBuy}>Buy</button>
    )
}

export default BuyButton