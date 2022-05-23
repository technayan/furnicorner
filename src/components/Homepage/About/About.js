import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section id='about'>
            <h2 className='section-title'>About Us</h2>
            <Container>
                <Row>
                    <div className="col-md-6">
                        <img src="https://cdn.pixabay.com/photo/2020/04/16/13/51/furniture-5050719_1280.jpg" className='w-100' alt="Furniture" />
                    </div>
                    <div className="col-md-6 h-100 d-flex align-items-center">
                        <div className="about mt-5">
                            <h3 className='mb-3'>FurniCorner</h3>
                            <p style={{lineHeight: '2'}}>FurniCorner is a warehouse company which store different types of furniture. We store world class premium furnitures for whole sale. If you are a retailer then you can buy furnitures in wholesale from us in a very cheap price. Maximum of our products are made with Malaysian and Canadian processing wood. Besides all the cushions, rexins are imported. Our products are well burnished with imported burnish.</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default About;