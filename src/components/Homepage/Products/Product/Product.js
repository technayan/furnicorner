import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Product.css'

const Product = ({item}) => {
    const {_id, name, imageUrl, description, price, quantity, supplier} = item;
    return (
        <div className='col-md-4'>
            {/* <div className="mx-2 my-4 px-3 pt-3 product-container">
                <img src={imageUrl} className='w-100 product-img' alt={name} />
                <h4 className='my-4'>{name}</h4>
                <p >{description}</p>
                <p className='mb-2'><strong>Price : ${price}</strong></p>
                <p className='mb-2'>Quantity : {quantity}</p>
                <p className='mb-2'>Supplier : {supplier}</p>
                <button className='update-btn mt-2 w-100 p-2'>Update</button>
            </div> */}
            <CardGroup>
            <Card className='product-card mt-4'>
                <Card.Img className='p-3 rounded' variant="top" src={imageUrl} />
                <Card.Body>
                <Card.Title className='product-name mb-3'>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p className='mb-2'><strong>Price : ${price}</strong></p>
                <p className='mb-2'>Quantity : {quantity}</p>
                <p className='mb-2'>Supplier : {supplier}</p>
                <button className='update-btn mt-3 w-100 p-2'>Update</button>
                </Card.Body>
            </Card>
            </CardGroup>
            
        </div>
    );
};

export default Product;