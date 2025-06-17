import '../css/sarees.css'

const SareeDetails = ({ sareesInfo }) => {
    return (
        <div className="sareeDetails">
            <p style={{ textAlign: "left" }}>Title : {sareesInfo.sareeName}</p>
            <p>Price : {sareesInfo.sareePrice}</p>
            <div className='buyBtns'>
                <button>Add to Cart</button>
                <button>Buy</button>
            </div>
        </div>
    )
}


export default SareeDetails