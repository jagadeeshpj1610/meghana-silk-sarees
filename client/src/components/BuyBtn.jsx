

const BuyButton = ({sareeInfo}) => {
    const handleClickOnBuy = async () => {
        console.log(Date.now())
        const orderId = `${sareeInfo._id}${Date.now()}`


    }

    return(
        <button onClick={handleClickOnBuy}>Buy</button>
    )
}

export default BuyButton