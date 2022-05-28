import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    
    const [myItems, setMyItems] = useState([]);

    const [user] = useAuthState(auth);

    const email = user.email;

    useEffect(() => {
        fetch(`https://aqueous-bastion-42531.herokuapp.com/products/${email}`)
        .then(res => res.json())
        .then(data => setMyItems(data))
    })

    const handleDeleteProduct = id => {
        const confirm = window.confirm('Are you sure to delete this product?');
        
        if (confirm) {
            const url = `https://aqueous-bastion-42531.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
        else {
            return;
        }
        
    }
    return (
        <div>
            <Container className='mt-5 pt-5'>
                <h2>My Items</h2>
                {
                    myItems.map(product => 
                        <div key={product._id} className='my-items-wrapper d-flex flex-column flex-md-row'>
                            <img className='my-items-img' src={product.imageUrl} alt={product.name} />
                            <div className="my-items-info mx-0 mx-md-4">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p><strong>Price : ${product.price}</strong></p>
                                <p>Quantity : {product.quantity}</p>
                                <p>Supplier : {product.supplier}</p>
                            </div>
                            <div className='d-flex align-items-center'>
                            <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-danger delete-btn'>Delete</button>
                            </div>
                        </div>
                    )
                }
                <div className="text-center">
                    <Link className='custom-link' to={'/add-item'}>Add Item</Link>
                </div>
            </Container>
            
        </div>
    );
};

export default MyItems;