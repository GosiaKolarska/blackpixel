import React, {useState} from 'react';
import Navbar from '../navbar';
import HeroSection from '../heroSection';
import InfoSection from '../infoSection';
import Footer from '../footer';

const Home = () => {
    
    return (
        <>
        <Navbar />
        <HeroSection />
        <InfoSection />
        <Footer />
        </>
    )
}

export default Home;
