import React, { useEffect, useState } from "react";
import '../css/sarees.css'
import SareeDetails from "./SareeDetails";


const Sarees = () => {
    const [sarees, setSarees] = useState([]);
    const [toastMessage, setToastMessage] = useState("");

    const fetchSarees = async () => {
        try {
            const res = await fetch('http://localhost:8000/cards', {
                method: 'GET',
                credentials: 'include'
            });
            const data = await res.json();
            setSarees(data.cards)
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

    return (
        <>
            {toastMessage && <div style={{textAlign:'center', color:'green', paddingTop:'10px', fontSize:'1rem', margin:'2px'}} className="toast">{toastMessage}</div>}
            <div className="sareesContainer">
                {sarees.length === 0 ? (
                    <p>No sarees Available</p>
                ) :
                    sarees.map((saree, index) => (
                        <div key={saree._id} className="sareeCard">
                            <img className="image" src={saree.sareePhoto.url} alt={`saree-${index + 1}`} />
                            <SareeDetails sareesInfo={saree} setSarees={setSarees} setToastMessage={setToastMessage} />
                        </div>

                    ))
                }

            </div>
        </>

    );
};

export default Sarees;
