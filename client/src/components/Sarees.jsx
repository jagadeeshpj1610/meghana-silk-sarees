import React, { useEffect, useState } from "react";
import '../css/sarees.css'
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
                        <img className="image" key={saree.photoId} src={saree.url} alt={`saree-${index + 1}`} />
                    ))
                }
        </div>
    );
};

export default Sarees;
