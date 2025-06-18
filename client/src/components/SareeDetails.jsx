import '../css/sarees.css'
import del from "../assets/delete.png"
import el from "../assets/pen.png"
import { useState } from 'react'


const SareeDetails = ({ sareesInfo, setSarees, setToastMessage }) => {

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8000/cards/${sareesInfo._id}`,{
                method: 'DELETE',
                credentials: 'include'
            })

            const data = await response.json()
            if (response.ok) {
                setSarees(prev => prev.filter(item => item._id !== sareesInfo._id))
                setToastMessage(data.message);
            } else{
                console.log("failed to delete sarre or not updating ui");
                
            }
        } catch (error) {
            console.log("Eroor deleting Saree", error);
            
        }
    }
    
    return (
        <div className="sareeDetails">
            <div className='modesContent'>
                <div>
                    <p style={{ textAlign: "left" }}>Title : {sareesInfo.sareeName}</p>
                    <p>Price : {sareesInfo.sareePrice}</p>
                </div>
                <div>
                    <img className='edit' src={el} alt="" />
                    <img  className='delete'  src={del} alt="" onClick={handleDelete} />
                </div>
            </div>
            <div className='buyBtns'>
                <button>Add to Cart</button>
                <button>Buy</button>
            </div>
        </div>
    )
}


export default SareeDetails