

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PaymentStatusPopup from './paymentStatusPopup';

const PaymentSuccess = () => {
    const { orderId } = useParams();
    const [loading, setLoading] = useState(true);
    const [paymentDetails, setPaymentDetails] = useState(null)
    const [paymentPopup, setPaymentPopup] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPaymentStatus = async () => {
            try {
                const res = await fetch(`http://localhost:8000/payment/payment-details/${orderId}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await res.json();
                setPaymentDetails(data)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPaymentStatus();
    }, [orderId]);

    const handleClosePopup = () => {
        setPaymentPopup(false);
        navigate("/");
    };

    if (loading) return <div style={{textAlign:'center', fontSize:'1rem', padding:'10px'}}>Checking payment status...</div>;

    return (
        <>
        {paymentPopup && (<PaymentStatusPopup details = {paymentDetails} close = {handleClosePopup} />)}
        </>
    );
};

export default PaymentSuccess;
