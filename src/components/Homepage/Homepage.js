import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Services from './Services/Services';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Products />
            <About />
            <Services />
        </div>
    );
};

export default Homepage;