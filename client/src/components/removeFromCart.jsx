

const RemoveFromCart = ({ cards }) => {

    const removeFromCart = async () => {
        try {
            // const response = await fetch('http://localhost:8000/cart', {
            //     method: 'DELETE',
            //     credentials: 'include',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ cardId : cards.card._id })
            // })
            console.log(cards);
            
            // const data = await response.json()
            // console.log(data);

        } catch (error) {
            console.log('failed to product is remove from cart', error);

        }
    }

    return (
        <button onClick={removeFromCart}>Remove From Cart</button>
    )
}

export default RemoveFromCart