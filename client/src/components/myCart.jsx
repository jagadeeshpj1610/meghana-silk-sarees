


import { useEffect, useState } from 'react';
import BuyButton from './BuyBtn';

import RemoveFromCart from './removeFromCart';

const CartPage = () => {
    const [cards, setCards] = useState([])
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch("http://localhost:8000/cart", {
                method: 'GET',
                credentials: "include",
            });
            const data = await res.json();
            // console.log(data);
            setCards(data.cards)
            setData(data)
        };
        fetchCart();
    }, []);

    if (!data) return <p>Loading cart...</p>;

    return (
        <div>
            <h2>Your Cart</h2>

            {cards && cards.length > 0 ? (
                <div>
                    {cards.map((item, index) => (
                        <div key={index}>
                            <img src={item.card.sareePhoto.url} alt="" />
                            <p><strong>Name:</strong> {item.card.sareeName}</p>
                            <p><strong>Saree Quantity:</strong>{item.quantity}</p>
                            <p><strong>Saree Price:</strong>{item.card.sareePrice}</p>
                            <div>
                                <RemoveFromCart cards={cards} />
                                <BuyButton />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
