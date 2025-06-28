
import { useState, useRef, useEffect } from "react";
import '../css/addNewSaree.css'
import { useNavigate } from 'react-router-dom';


const UpdateSaree = ({ sareeInfo, isEditing, setIsEditing, onSuccess }) => {
  const [file, setFile] = useState(null);
  const [sareeName, setSareeName] = useState("");
  const [sareePrice, setSareePrice] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInput = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (isEditing && sareeInfo) {
      setSareeName(sareeInfo.sareeName);
      setSareePrice(sareeInfo.sareePrice);
    }
  }, [isEditing, sareeInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sareeName || !sareePrice || (!file && !isEditing)) {
      setMessage("All fields required");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    if (file) formData.append("saree-image", file);
    formData.append("sareeName", sareeName);
    formData.append("sareePrice", sareePrice);

    const url = isEditing
      ? `https://meghana-silk-sarees-3ufw.onrender.com/cards/${sareeInfo._id}`
      : `https://meghana-silk-sarees-3ufw.onrender.com/cards`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(isEditing ? "Updated successfully" : "Uploaded successfully");

        setFile(null);
        setSareeName("");
        setSareePrice("");
        fileInput.current.value = null;
        setTimeout(() => {
          setMessage("");
          setIsEditing(false);
          onSuccess && onSuccess(data.card);

        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newSareeContainer">
      <h2>{isEditing ? "Edit Saree" : "Upload Saree"}</h2>
      <div style={{ color: 'green', textAlign: 'center' }}>{message}</div>

      <label>Saree Name:</label>
      <input
        type="text"
        value={sareeName}
        onChange={(e) => setSareeName(e.target.value)}
      />

      <label>Saree Price:</label>
      <input
        type="text"
        value={sareePrice}
        onChange={(e) => setSareePrice(e.target.value)}
      />

      {isEditing && sareeInfo?.sareePhoto && (
        <div style={{ margin: "10px 0" }}>
          <p><strong>Current Image:</strong></p>
          <img
            src={sareeInfo.sareePhoto.url}
            alt="Existing Saree"
            style={{ width: "200px", height: "auto", borderRadius: "10px" }}
          />
        </div>
      )}

      <label>{isEditing ? "Change Image (optional):" : "Upload Image:"}</label>
      <input type="file" accept="image/*" ref={fileInput} onChange={(e) => setFile(e.target.files[0])} />

      <button className="uploadBtn" onClick={handleSubmit} disabled={loading}>
        {loading ? (isEditing ? "Updating..." : "Uploading...") : isEditing ? "Update" : "Upload"}
      </button>

      {isEditing && (
        <button onClick={() => setIsEditing(false)} style={{ marginTop: "10px", backgroundColor: 'red', border: 'none', padding: '12px', borderRadius: '10px', width: '100px', cursor: 'pointer' }}>
          Cancel
        </button>
      )}
    </div>
  );
};


export default UpdateSaree