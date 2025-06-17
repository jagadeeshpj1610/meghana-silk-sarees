import React from 'react';
import '../css/header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch("http://localhost:8000/auth/logout", {
            method: "POST",
            credentials: "include",
        });
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className="headerDiv">
            <div>
                <h1>Meghana Silk Sarees</h1>
            </div>
            <div className="headerButtons">
                {!isLoggedIn && (
                    <>
                        <Link to="/signup" className='signUpBtn'>Signup</Link>
                        <Link to="/login" className='loginBtn'>Login</Link>
                    </>
                )}
                {isLoggedIn && (
                    <button className='logoutBtn' onClick={handleLogout}>Logout</button>
                )}
                <Link to="/cart" className='cartBtn'>My 🛒</Link>
            </div>
        </div>
    );
};

export default Header;
