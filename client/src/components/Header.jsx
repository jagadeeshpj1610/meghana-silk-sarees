import React from 'react';
import '../css/header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="headerDiv">
            <div>
                <h1>Meghana Silk Sarees</h1>

            </div>
            <div className="headerButtons">
                <Link to="/signup" className='signUpBtn'>Signup</Link>
                <Link to="/login" className='loginBtn'>Login</Link>
                <Link to="/cart" className='cartBtn'>Add to 🛒</Link>
            </div>

        </div>
    );
}

export default Header;