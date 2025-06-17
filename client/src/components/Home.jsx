import React from 'react';
import Header from './Header';
import UploadSaree from './upload'
import Sarees from './Sarees';

const Home = () => {
    return (
        <div className='homePage'>
            <Header />
            <UploadSaree />
            <Sarees />
         
        </div>
    );
}

export default Home;