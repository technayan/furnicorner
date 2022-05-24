import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <section>
            <h2 className='section-title'>Services</h2>
            <Container>
                <Row>
                    <div className="col-md-4 my-3">
                        <div className="service-wrapper p-4 d-flex align-items-start">
                            <i class="ri-checkbox-circle-line"></i>
                            <div className="service-info ms-4">
                                <h4>Quality Product</h4>
                                <p>We provide 100% high qulity furniture to our customers as quality is their first choice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="service-wrapper p-4 d-flex align-items-start">
                            <i class="ri-luggage-cart-line"></i>
                            <div className="service-info ms-4">
                                <h4>Wholesale</h4>
                                <p>If you are a retailer, then come to us and buy products at a best price and offer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="service-wrapper p-4 d-flex align-items-start">
                            <i class="ri-truck-line"></i>
                            <div className="service-info ms-4">
                                <h4>Fast Delivery</h4>
                                <p>We are very much serious about delivery. We'll deliver your products within 24 hours only.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="service-wrapper p-4 d-flex align-items-start">
                            <i class="ri-ship-2-line"></i>
                            <div className="service-info ms-4">
                                <h4>Imported Product</h4>
                                <p>We provide imported high quality products to our customers with a best deal of warranty.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="service-wrapper p-4 d-flex align-items-start">
                            <i class="ri-store-2-line"></i>
                            <div className="service-info ms-4">
                                <h4>Warehousing</h4>
                                <p>We are a warehousing company. We store huge amount of products from different dealers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="service-wrapper p-4 d-flex align-items-start">
                            <i class="ri-customer-service-2-line"></i>
                            <div className="service-info ms-4">
                                <h4>24hr Support</h4>
                                <p>We have the best customer service. Our customer service team is always ready to help you.</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Services;