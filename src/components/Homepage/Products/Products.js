import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    return (
        <section id='products-section'>
            <h2 className='section-title mx-auto'>Products</h2>
            <Container>
                <Row>
                    {
                        products.map(product => <Product key={product._id} item={product}/>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Products;