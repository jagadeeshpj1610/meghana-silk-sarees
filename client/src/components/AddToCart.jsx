import { useState } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";


const AddToCart = ({ sareeInfo, isLoggedIn }) => {
    const navigate = useNavigate()

    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(false);

    const addToCartFunction = async () => {

        if(!isLoggedIn) navigate('/login')

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

            <button className="addToCartBtn" onClick={addToCartFunction}>Add To Cart</button>
        </>
    )
}

export default AddToCart