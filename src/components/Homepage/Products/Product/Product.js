import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Product.css'

const Product = ({item}) => {
    const {_id, name, imageUrl, description, price, quantity, supplier} = item;

    const updateProduct = (id) => {
        console.log(id);
    }

    return (
        <div className='col-md-4'>
            <CardGroup>
            <Card className='product-card mt-4'>
                <Card.Img className='p-3 rounded-3' variant="top" src={imageUrl} />
                <Card.Body>
                <Card.Title className='product-name mb-3'>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p className='mb-2'><strong>Price : ${price}</strong></p>
                <p className='mb-2'>Quantity : {quantity}</p>
                <p className='mb-2'>Supplier : {supplier}</p>
                <button className='update-btn mt-3 w-100 p-2' onClick={() => updateProduct(_id)}>Update</button>
                </Card.Body>
            </Card>
            </CardGroup>
            
        </div>
    );
};

export default Product;