import '../css/mycart.css'

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
            setCards(data.cards)
            setData(data)
        };
        fetchCart();
    }, []);

    const handleRemove = (id) => {
        setCards(prev => prev.filter(item => item.card._id != id))
    }

    if (!data) return <p className='loading'>Loading cart...</p>;

    return (
        <div className='mainContainer'>
            <h2 className='cart'>My Cart</h2>

            {cards && cards.length > 0 ? (
                <div className='cardsContainer'>
                    {cards.map((item, index) => (
                        <div key={index} className='productContainer'>
                            <img src={item.card.sareePhoto.url} alt="" className='sareeImage' />

                            <div className='productDetails'>
                                <p className='sareeName'><strong>Name:</strong> {item.card.sareeName}</p>
                                <p className='quantity'><strong>Quantity:</strong> {item.quantity}</p>
                                <p className='sareePrice'><strong>Price:</strong> ₹{item.card.sareePrice}</p>
                                <p className='sareeDescription'><strong>Description:</strong>Yadiki Silk Saree – A perfect blend of tradition and elegance, crafted with rich silk and fine detailing.
                                    Ideal for festive occasions, it adds timeless grace and charm to your look.</p>

                                <div className='buyCartBtns'>
                                    <BuyButton />
                                    <RemoveFromCart cardId={item.card._id} toRemove={() => handleRemove(item.card._id)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{textAlign:'center', padding:'10px', fontSize:'1rem'}}>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
