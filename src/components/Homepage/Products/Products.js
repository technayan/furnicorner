import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();

    const homeProducts = products.slice(0,6);
    return (
        <section id='products-section'>
            <h2 className='section-title mx-auto'>Products</h2>
            <Container>
                <Row>
                    {
                        homeProducts.map(product => <Product key={product._id} item={product}/>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Products;