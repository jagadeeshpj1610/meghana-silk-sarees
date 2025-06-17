import React, { useEffect, useState } from "react";
import '../css/sarees.css'
import SareeDetails from "./SareeDetails";


const Sarees = () => {
    const [sarees, setSarees] = useState([]);

    const fetchSarees = async () => {
        try {
            const res = await fetch('http://localhost:8000/upload', {
                method: 'GET',
                credentials: 'include'
            });
            const data = await res.json();
            setSarees(data.photos)
        } catch (error) {
            console.log("Upload failed:", error);
        }
    };

    useEffect(() => {
        fetchSarees();
    }, []);

    return (
        <div className="sareesContainer">
            {
                sarees.map((saree, index) => (
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <img className="image" key={saree.photoId} src={saree.url} alt={`saree-${index + 1}`} />
                        <SareeDetails />
                    </div>

                ))
            }

        </div>
    );
};

export default Sarees;
