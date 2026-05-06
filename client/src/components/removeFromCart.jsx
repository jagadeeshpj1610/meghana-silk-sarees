import { useState } from "react";
import '../css/sarees.css';

const API_URL = import.meta.env.VITE_API_URL;

const RemoveFromCart = ({ cardId, toRemove }) => {

    const removeFromCart = async () => {
 
        try {
            const response = await fetch(`${API_URL}/cart`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cardId })
            })
            
            const data = await response.json()
            console.log(data);
            if (response.ok) {
                toRemove()
            }

        } catch (error) {
            console.log('failed to product is remove from cart', error);

        }
    }

    return (
        <button className = 'buybtnn' onClick={removeFromCart}>Remove From Cart</button>
    )
}

export default RemoveFromCart