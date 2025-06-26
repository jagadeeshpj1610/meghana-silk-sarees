import { useState } from 'react';
import '../css/header.css'

const Profile = ({user}) => {

    if (!user) return <div style={{textAlign:'center', padding:'15px', fontSize:'1rem'}}>Loading...</div>;

    return (
        <div>
            <div>

            </div>
            <div className="profilePage">
                <h2>Welcome, {user.name || "User"}</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Role: {user.role}</p>
            </div>
        </div>
    );
}

export default Profile