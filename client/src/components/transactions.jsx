import { useEffect, useLayoutEffect } from "react"
import { useState } from "react"
import '../css/profile.css'
import PaymentStatus from './paymentStatus';



const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const fetchUserTransactions = async () => {
        try {
            const response = await fetch('http://localhost:8000/payment', {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            console.log(data);
            setTransactions(data.orders)

        } catch (error) {
            console.log("Failed fectching transactions", error);

        }
    }
    useEffect(() => {
        fetchUserTransactions()
    }, [])

    return (
        <div>
            <div className="top">
            <h2 style={{ marginBottom: '10px' }}>My Transactions</h2>
            <PaymentStatus />
            </div>
            {transactions && transactions.length > 0 ? (
                <div className='cardsContaine'>
                    {transactions.map((transaction, index) => (
                        <div key={index} className='productContainer'>
                            <img src={transaction.card.sareePhoto.url} alt="" className='sareeImage' />
                            <div className="productDetails">
                                <p className='sareeName'><strong>Name:</strong> {transaction.card.sareeName}</p>
                                <p className='sareePrice'><strong>Price:</strong> ₹{transaction.card.sareePrice}</p>
                                <p className='sareePrice'><strong>Order Id:</strong> {transaction.orderId}</p>
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                <p style={{ textAlign: 'center', padding: '10px', fontSize: '1rem' }}>Your cart is empty.</p>
            )}
        </div>
    )
}

export default Transactions