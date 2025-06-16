import React from 'react';
import '../css/header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <div className="headerDiv">
            <div>
                <h1>Meghana Silk Sarees</h1>

            </div>
            <div className="headerButtons">
                <button className='signUpBtn'>Signup</button>
                <button className='loginBtn'>Login</button>
                <button className='cartBtn'>🛒</button>
            </div>

        </div>
    );
}

export default Header;