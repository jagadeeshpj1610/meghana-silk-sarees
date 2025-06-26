

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const { orderId } = useParams();
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPaymentStatus = async () => {
            try {
                const res = await fetch(`http://localhost:8000/payment/payment-details/${orderId}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await res.json();
            } catch (err) {
                console.log(err);
            } finally {
                // setLoading(false);
            }
        };
        fetchPaymentStatus();
    }, [orderId]);

    // if (loading) return <div>Checking payment status...</div>;

    return (
        <div>
            <h2>Payment Status</h2>
        </div>
    );
};

export default PaymentSuccess;
