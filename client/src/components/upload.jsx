

import { useState } from "react";




    const UploadSaree = () =>  {
        const [file, setFile] = useState(null);

        const handleFileChange = (e) => {
            setFile(e.target.files[0]);
        };

        const handleUpload = async () => {
            if (!file) console.log("file required");
            

            const formData = new FormData();
            formData.append('saree-image', file);

            try {
                const res = await fetch('http://localhost:8000/upload', {
                    method: 'POST',
                    body: formData,
                });

                const data = await res.json();
                console.log("Upload Success:", data);
                console.log("uploaded succesfully");
                
            } catch (error) {
                console.log("Upload failed:", error);
                
            }
        };

        return (
            <div>
                <h2>Upload Silk Saree</h2>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        );
    }


export default UploadSaree