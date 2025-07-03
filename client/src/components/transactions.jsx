import { useEffect, useLayoutEffect } from "react"
import { useState } from "react"
import '../css/profile.css'
import PaymentStatus from './paymentStatus';



const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [copiedId, setCopiedId] = useState(null);

    const fetchUserTransactions = async () => {
        try {
            const response = await fetch('https://meghana-silk-sarees-3ufw.onrender.com/payment', {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            // console.log(data);
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
                                <p className='sareePrice'>
                                    <strong>Order Id:</strong> {transaction.orderId}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(transaction.orderId);
                                            setCopiedId(transaction.orderId);
                                            setTimeout(() => setCopiedId(null), 2000);
                                        }}
                                        style={{
                                            marginLeft: '10px',
                                            padding: '2px 6px',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer',
                                            backgroundColor: copiedId === transaction.orderId ? '#d4edda' : '#f0f0f0',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        {copiedId === transaction.orderId ? "Copied!" : "Copy"}
                                    </button>
                                </p>
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