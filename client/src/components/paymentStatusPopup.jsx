import '../App.css'

const PaymentStatusPopup = ({ details, close }) => {
    if (!details || typeof details !== "object") {
        return <div style={{ padding: "10px", textAlign: "center", color: "red" }}>{details || "No details available."}</div>;
    }

    return (
        <div className="popupBack" onClick={close}>
            <div className="popupSimple">
                <button className="closeBtnnn" onClick={close}>×</button>
                <h2>Payment Status</h2>
                <p><strong>Status:</strong> {details.payment_status}</p>
                <p><strong>Amount Paid:</strong> ₹{details.payment_amount}</p>
                <p><strong>Order ID:</strong> {details.order_id}</p>
                <p><strong>Payment ID:</strong> {details.cf_payment_id}</p>
                <p><strong>Time:</strong> {new Date(details.payment_time).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default PaymentStatusPopup;
