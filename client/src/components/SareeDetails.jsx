import '../css/sarees.css'
import del from "../assets/delete.png"
import el from "../assets/pen.png"
import { useState } from 'react'
import UpdateSaree from './upload'
import Modal from './popup'
import AddToCart from './AddToCart'
import BuyButton from './BuyBtn'

const SareeDetails = ({ sareesInfo, setSarees, setToastMessage, isAdmin }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8000/cards/${sareesInfo._id}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const data = await response.json();
            if (response.ok) {
                setSarees(prev => prev.filter(item => item._id !== sareesInfo._id));
                setToastMessage(data.message);
            } else {
                console.log("failed to delete saree or not updating UI");
            }
        } catch (error) {
            console.log("Error deleting saree", error);
        }
    };

    const handleUpdate = (updatedCard) => {
        // console.log(updatedCard);

        setSarees(prev =>
            prev.map(card =>
                card._id === updatedCard._id ? updatedCard : card
            )
        );
    };


    return (
        <>
            {isEditing ? (
                <Modal onClose={() => setIsEditing(false)}>
                    <UpdateSaree
                        sareeInfo={sareesInfo}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        onSuccess={(updatedCard) => {
                            // setTimeout(() => {
                            handleUpdate(updatedCard);
                            setToastMessage("Saree updated successfully");
                            // }, 4000);
                        }}
                    />
                </Modal>
            ) : (
                <div className="sareeDetails">
                    <div className='modesContent'>
                        <div>
                            <p style={{ textAlign: "left" }}>Title : {sareesInfo.sareeName}</p>
                            <p>Price : ₹{sareesInfo.sareePrice}</p>
                        </div>
                        {isAdmin && <div>
                            <img className='edit' src={el} alt="" onClick={() => setIsEditing(true)} />
                            <img className='delete' src={del} alt="" onClick={handleDelete} />
                        </div>}
                    </div>
                    <div className='buyBtns'>
                        {!isAdmin && <AddToCart sareeInfo={sareesInfo} />}
                        {!isAdmin && <BuyButton sareeInfo={sareesInfo} />}
                    </div>
                </div>
            )}
        </>
    );
};

export default SareeDetails;
