import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './UpdateProduct.css';

const UpdateProduct = () => {

    

    const params = useParams();

    const { id } = params;

    const [product, setProduct]= useState([]);

    useEffect(() => {
        const url = `https://aqueous-bastion-42531.herokuapp.com/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [product]);

    // Update Product Handler
    const handleUpdateProduct = updatedQuantity => {

        // Updated Product
        const updatedProduct = {
            name : product.name,
            imageUrl : product.imageUrl,
            description : product.description,
            price : product.price,
            quantity : updatedQuantity,
            supplier : product.supplier
        }

        const url = `https://aqueous-bastion-42531.herokuapp.com/product/${id}`;
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

    const handleDelivery = () => {
        const currentQuantity = product.quantity;
        const updatedQuantity = JSON.stringify(currentQuantity - 1);

        handleUpdateProduct(updatedQuantity);
        
    }

    const handleRestock = e => {
        e.preventDefault();
        const restockQuantity = parseInt(e.target.restock.value);
        const currentQuantity = parseInt(product.quantity);
        const updatedQuantity = currentQuantity + restockQuantity;

        handleUpdateProduct(updatedQuantity);
        e.target.restock.value = '';
    }

    return (
        <div>
            
            <Container className='d-flex flex-column justify-content-center my-5 pt-5'>
                <h2 className='mb-5'>Update Product</h2>
                <div className='product-details-wrapper d-flex flex-column flex-md-row align-items-md-center align-items-start'>
                    <img src={product.imageUrl} className='rounded product-detail-img mx-auto ms-md-0' alt={product.name} />
                    <div className="product-details-info my-4 my-md-0 mx-md-5">
                        <h4>{product.name}</h4>
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
            <Container>
                <h2 className='text-center'>Restock Product</h2>
                <form className='restock-form p-3 mt-3 mx-auto' onSubmit={handleRestock}>
                    <input className='p-2' type="number" name='restock' placeholder='Restock Quantity' required />
                    <input className='py-2' type="submit" value='Restock' />
                </form>
                <div className="text-center">
                    <Link className='custom-link' to={'/manage-inventories'}>Manage Inventories</Link>
                </div>
            </Container>
        </div>
    );
};

export default UpdateProduct;