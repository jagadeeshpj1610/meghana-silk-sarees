import React, { useEffect, useState } from "react";
import '../css/sarees.css';
import SareeDetails from "./SareeDetails";
import { useUser } from "./userContext";



const Sarees = ({ isAdmin, isLoggedIn }) => {
    const [toastMessage, setToastMessage] = useState("");
    const [data, setData] = useState(null);
    const {sarees, setSarees} = useUser();

    const fetchSarees = async () => {
        try {
            const res = await fetch('https://meghana-silk-sarees-3ufw.onrender.com/cards', {
                method: 'GET',
                credentials: 'include'
            });
            const data = await res.json();
            setSarees(data.cards)
            setData(data)
        } catch (error) {
            console.log("Upload failed:", error);
        }
    };

    useEffect(() => {
        fetchSarees();
    }, []);


    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    if (!data) return <p style={{ textAlign: 'center', padding: '5px', fontSize: '1rem' }}>Sarees Loading...</p>

    return (
        <>
            {toastMessage && <div style={{ textAlign: 'center', color: 'green', paddingTop: '10px', fontSize: '1rem', margin: '2px' }} className="toast">{toastMessage}</div>}
            <div className="sareesContainer">
                {sarees.length === 0 ? (
                    <p>No sarees Available</p>
                ) :
                    sarees.map((saree, index) => (
                        <div key={saree._id} className="sareeCard">
                            <img className="image" src={saree.sareePhoto.url} alt={`saree-${index + 1}`} />
                            <SareeDetails sareesInfo={saree} setSarees={setSarees} setToastMessage={setToastMessage} isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
                        </div>

                    ))
                }

            </div>
        </>

    );
};

export default Sarees;
