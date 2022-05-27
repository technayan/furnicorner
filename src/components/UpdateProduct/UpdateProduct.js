import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css';

const UpdateProduct = () => {

    

    const params = useParams();

    const { id } = params;

    const [product, setProduct]= useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [product]);

    const handleDelivery = () => {
        const currentQuantity = product.quantity;
        const updatedQuantity = JSON.stringify(currentQuantity - 1);

        const updatedProduct = {
            name : product.name,
            imageUrl : product.imageUrl,
            description : product.description,
            price : product.price,
            quantity : updatedQuantity,
            supplier : product.supplier
        }

        
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

    

    return (
        <div>
            <h2>Update Product</h2>
            <Container>
                <div className='product-details-wrapper d-flex align-items-center justify-content-between'>
                    <img src={product.imageUrl} className='w-25 rounded' alt={product.name} />
                    <div className="product-details-info w-50">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p><strong>Price : {product.price}</strong></p>
                        <p>Supplier : {product.supplier}</p>
                    </div>
                    <div>
                        <h4>Quantity : {product.quantity}</h4>
                        <button onClick={handleDelivery} className="delivered-btn px-4 py-2 rounded mt-3">Delivered</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UpdateProduct;