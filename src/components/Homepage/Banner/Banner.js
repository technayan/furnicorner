import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-area'>
            <Container className='d-flex justify-content-center align-items-center h-100'>
                <h1 className='text-center hero-text text-white'>Welcome to FurniCorner.</h1>
            </Container>
        </div>
    );
};

export default Banner;