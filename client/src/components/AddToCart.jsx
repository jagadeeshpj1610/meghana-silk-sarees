

const AddToCart = ({ sareeInfo }) => {
    

    const addToCartFunction = async () => {
        const response = await fetch('http://localhost:8000/cart', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cardId: sareeInfo._id })
        });
        const data = await response.json();
        console.log(data);

    }

    return (
        <button onClick={addToCartFunction}>Add To Cart</button>
    )
}

export default AddToCart