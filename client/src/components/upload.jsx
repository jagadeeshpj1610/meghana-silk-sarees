import { useState } from "react";
import '../css/addNewSaree.css'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UploadSaree = () => {
  const [file, setFile] = useState(null);
  const [sareeName, setSareeName] = useState("");
  const [sareePrice, setSareePrice] = useState("");
  const [message, setMessage] = useState("")
  const [isUploading, seIsUploading] = useState(false)
  const fileInput = useRef(null)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !sareeName || !sareePrice) {
      console.log("All fields required");
      return;
    }

    seIsUploading(true)

    const formData = new FormData();
    formData.append("saree-image", file);
    formData.append("sareeName", sareeName);
    formData.append("sareePrice", sareePrice);

    try {
      const res = await fetch("http://localhost:8000/cards", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();
      console.log("Upload Success:", data);
      if (res.ok) {
        setFile(null)
        setSareeName("")
        setSareePrice("")
        fileInput.current.value = null
        setMessage("New Saree is uploded succesfully")
        setTimeout(() => {
            setMessage("")
            navigate('/')
        }, 4000);
      }
    } catch (error) {
      console.log("Upload failed:", error);
    } finally{
        seIsUploading(false)
    }
  };

  return (
    <div className="newSareeContainer">
      <h2 className="headingNewSaree">Upload Silk Saree</h2>
      <div style={{color:'green', fontSize:'1rem', textAlign:'center'}}>{message}</div>
      <label htmlFor="">Saree Name:</label>
      <input type="text" placeholder="Saree Name" value={sareeName} onChange={(e) => setSareeName(e.target.value)} />
      <label htmlFor="">Saree Price:</label>
      <input type="text" placeholder="Saree Price" value={sareePrice} onChange={(e) => setSareePrice(e.target.value)} />
      <label htmlFor="">Upload the file:</label>
      <input type="file" accept="image/*" ref={fileInput} onChange={handleFileChange} />
      <button className="uploadBtn" onClick={handleUpload} disabled={isUploading}>{isUploading ? "Uploading...." : "Upload"}</button>
    </div>
  );
};

export default UploadSaree;
