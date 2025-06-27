import { useState } from 'react';
import '../css/profile.css';

const PaymentStatus = () => {
    // const [showPopup, setShowPopup] = useState(false);
    // const [orderId, setOrderId] = useState('');
    // const [statusResult, setStatusResult] = useState(null);
    // const [loading, setLoading] = useState(false);

    // const checkPaymentStatus = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await fetch(`http://localhost:8000/payment/payment-details/${orderId}`, {
    //             method: 'GET',
    //             credentials: 'include',
    //         });

    //         const data = await response.json();
    //         setStatusResult(data.message || JSON.stringify(data));
    //     } catch (err) {
    //         setStatusResult("Failed to fetch payment status.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <>
            <button className='paymentStatusBtn' onClick={() => setShowPopup(true)}>
                Payment Status
            </button>

            {/* {showPopup && (
                <div className='popupOverlay'>
                    <div className='popupBox'>
                        <button className='closeBtn' onClick={() => {
                            setShowPopup(false);
                            setStatusResult(null);
                            setOrderId('');
                        }}>X</button>

                        <h3>Enter Order ID</h3>
                        <input
                            type="text"
                            placeholder="Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className='orderInput'
                        />
                        <button className='checkBtn' onClick={checkPaymentStatus} disabled={loading}>
                            {loading ? "Checking..." : "Check Status"}
                        </button>

                        {statusResult && <p className='statusResult'>{statusResult}</p>}
                    </div>
                </div>
            )} */}
        </>
    );
};

export default PaymentStatus;
