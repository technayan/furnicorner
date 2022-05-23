import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Products />
            <About />
        </div>
    );
};

export default Homepage;