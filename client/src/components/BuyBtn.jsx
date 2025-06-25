

const BuyButton = ({sareeInfo}) => {
    const handleClickOnBuy = async () => {
        console.log(sareeInfo)
        const orderDetails = {
            orderId: `${sareeInfo._id}${Date.now()}`,
            amount: sareeInfo.sareePrice,
        }
        const res = await fetch("http://localhost:8000/payment/create-order",{
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        const data = await res.json();
        console.log(data)
    }

    return(
        <button onClick={handleClickOnBuy}>Buy</button>
    )
}

export default BuyButton