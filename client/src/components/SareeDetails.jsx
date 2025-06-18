import '../css/sarees.css'
import del from "../assets/delete.png"
import el from "../assets/pen.png"


const SareeDetails = ({ sareesInfo }) => {
    return (
        <div className="sareeDetails">
            <div className='modesContent'>
                <div>
                    <p style={{ textAlign: "left" }}>Title : {sareesInfo.sareeName}</p>
                    <p>Price : {sareesInfo.sareePrice}</p>
                </div>
                <div>
                    <img className='edit' src={el} alt="" />
                    <img  className='delete'  src={del} alt="" />
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