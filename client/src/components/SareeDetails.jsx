

const SareeDetails = ({sareesInfo}) => {    
    return(
        <div className="sareeDetails">
            <p>Title : {sareesInfo.sareeName}</p>
            <p>Price : {sareesInfo.sareePrice}</p>
            <button>Add to Cart</button>
            <button>Buy</button>
        </div>
    )
}


export default SareeDetails