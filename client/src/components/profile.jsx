import { useState } from 'react';
import '../css/header.css'
import Transactions from './transactions';
import { useUser } from './userContext';
import '../css/profile.css'

const Profile = () => {
    const { userDetails } = useUser()

    // console.log(userDetails);


    if (!userDetails) return <div style={{ textAlign: 'center', padding: '15px', fontSize: '1rem' }}>Loading...</div>;

    return (
        <div className='wholeContainer'>
            <div className='transactions'>
                <Transactions />
            </div>
            <div className="profileDiv">
                <h2>User Profile</h2>
                <p>Name: {userDetails.name}</p>
                <p>Email: {userDetails.email}</p>
                <p>Phone: {userDetails.phone}</p>
            </div>
        </div>


    );
}

export default Profile