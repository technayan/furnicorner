import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
                <img src="https://i.ibb.co/pQZy2Nf/undraw-Page-not-found-re-e9o6.png" className='w-50' alt="404 Page Not Found" />
            </Container>
        </div>
    );
};

export default NotFound;
