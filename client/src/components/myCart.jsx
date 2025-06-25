


import { useEffect, useState } from 'react';

const CartPage = () => {

    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch("http://localhost:8000/cart", {
                method:'GET',
                credentials: "include",
            });
            const data = await res.json();
        };
        fetchCart();
    }, []);

    if (!cartData) return <p>Loading cart...</p>;

    return (
        <div>
            <h2>Your Cart</h2>
        </div>
    );
};

export default CartPage;
