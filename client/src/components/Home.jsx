import React from 'react';
import Sarees from './Sarees';

const Home = ({isAdmin}) => {
    return (
        <div className='homePage'>
            <Sarees  isAdmin={isAdmin} />
        </div>
    );
}

export default Home;