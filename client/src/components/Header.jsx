import React from 'react';
import '../css/header.css';
import Logout from './logout';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CartButton from './cartButton';

const Header = ({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="headerDiv">
            <div>
                <Link to='/' className='linkHeading'><h1>Meghana Silk Sarees</h1></Link>
            </div>
            <div className="headerButtons">
                {isAdmin && <Link to='/addNewSaree' className='addNewSaree'>Add New Saree</Link>}
                {!isLoggedIn && (
                    <>
                        <Link to="/signup" className='signUpBtn'>Signup</Link>
                        <Link to="/login" className='loginBtn'>Login</Link>
                    </>
                )}

                {isLoggedIn && (
                    <>
                        <button className='logoutBtn' onClick={() => setShowPopup(true)}>Logout</button>
                        <Logout showPopup={showPopup} setShowPopup={setShowPopup} setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
                    </>
                )}
                {isLoggedIn && <CartButton isAdmin={isAdmin} />}
                {isLoggedIn && <Link className='profileBtn' to='/profile'>Profile</Link>}
            </div>
        </div>
    );
};

export default Header;
