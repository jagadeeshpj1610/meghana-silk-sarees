import React, { useEffect, useState } from "react";

const Sarees = () => {
    const [photo, setPhoto] = useState(null); 

    const fetchSarees = async () => {
        try {
            const res = await fetch('http://localhost:8000/upload', {
                method: 'GET',
            });
            const data = await res.json();
            console.log("Upload Success:", data);


            setPhoto(data.photos[0].url);

        } catch (error) {
            console.log("Upload failed:", error);
        }
    };

    useEffect(() => {
        fetchSarees();
    }, []);

    return (
        <div className="sareesContainer">
            {photo ? (<img src={photo} alt="saree" style={{ width: "300px", borderRadius: "10px" }} />) : (<p>Loading image...</p>)}
        </div>
    );
};

export default Sarees;
