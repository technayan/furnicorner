import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <div className='text-center'>
                        <Link className='custom-link' to={'/manage-inventories'}>Manage Inventories</Link>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Products;