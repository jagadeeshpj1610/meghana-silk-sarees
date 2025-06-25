import { useState } from "react";
import '../App.css'


const AddToCart = ({ sareeInfo }) => {

    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(false);

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
        if (response.ok) {
            setMessage('Product added to cart successfully!');
            setShowMessage(true);
        } else {
            setMessage('Failed to add product to cart.');
            setShowMessage(true);
        }
        setTimeout(() => {
            setShowMessage(false)
        }, 3000);
        console.log(data);


    }

    return (
        <>
            {showMessage && (
                <div className="toastMessage">
                    {message}
                </div>
            )}

            <button onClick={addToCartFunction}>Add To Cart</button>
        </>
    )
}

export default AddToCart