import { useState } from 'react';
import '../css/profile.css';
import PaymentStatusPopup from './paymentStatusPopup';

const PaymentStatus = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [statusResult, setStatusResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkPaymentStatus = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://meghana-silk-sarees-3ufw.onrender.com/payment/payment-details/${orderId}`, {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();
            setStatusResult(data);
        } catch (err) {
            setStatusResult("Failed to fetch payment status.");
        } finally {
            setLoading(false);
        }
    };


    const handleClosePopup = () => {
        setShowPopup(false);
        setStatusResult(null);
        setOrderId('');
    }

    return (
        <>
            <button className='paymentStatusBtn'
                onClick={() => setShowPopup(true)}
            >
                Payment Status
            </button>

            {showPopup && (
                <div className='popupOverlay' onClick={setShowPopup(false)}>
                    <div className='popupBox'>
                        <h3>Enter Order ID</h3>
                        <input
                            type="text"
                            placeholder="Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className='orderInput'
                            style={{ padding: '5px', borderRadius: '5px', margin: '5px', outline: 'none' }}
                        />
                        <button className='checkBtn' onClick={checkPaymentStatus} disabled={loading} style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'black', color: 'white', cursor: 'pointer', border: 'none' }}>
                            {loading ? "Checking..." : "Check Status"}
                        </button>
                        {statusResult && (<PaymentStatusPopup details={statusResult} close={handleClosePopup} />)}
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentStatus;
