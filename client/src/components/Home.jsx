import React from 'react';
import Sarees from './Sarees';

const Home = ({isAdmin, isLoggedIn}) => {
    return (
        <div className='homePage'>
            <Sarees  isAdmin={isAdmin} isLoggedIn = {isLoggedIn} />
        </div>
    );
}

export default Home;