
import { Link } from "react-router-dom";

const CartButton = ({ isAdmin }) => {
    return (
        <div>
            {!isAdmin && <Link to="/cart" className='cartBtn'>My 🛒</Link>}
        </div>
    );
};

export default CartButton;
