import React from 'react';
import Navbar from '../Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Sheba from './Sheba';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Sheba></Sheba>
            <Footer></Footer>
        </div>
    );
};

export default Home;