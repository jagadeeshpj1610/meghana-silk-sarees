import { useState } from "react";
import '../css/addNewSaree.css'

const UploadSaree = () => {
  const [file, setFile] = useState(null);
  const [sareeName, setSareeName] = useState("");
  const [sareePrice, setSareePrice] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !sareeName || !sareePrice) {
      console.log("All fields required");
      return;
    }

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
    } catch (error) {
      console.log("Upload failed:", error);
    }
  };

  return (
    <div className="newSareeContainer">
      <h2 className="headingNewSaree">Upload Silk Saree</h2>
      <label htmlFor="">Saree Name:</label>
      <input type="text" placeholder="Saree Name" onChange={(e) => setSareeName(e.target.value)} />
      <label htmlFor="">Saree Price:</label>
      <input type="text" placeholder="Saree Price" onChange={(e) => setSareePrice(e.target.value)} />
      <label htmlFor="">Upload the file:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button className="uploadBtn" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadSaree;
