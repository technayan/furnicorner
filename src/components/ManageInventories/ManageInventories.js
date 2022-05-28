import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventories = () => {
    const [products, setProducts] = useProducts();

    const handleDeleteProduct = id => {
        const confirm = window.confirm('Are you sure to delete this product?');
        if(confirm) {
            const rest = products.filter(product => product._id !== id);
        
            const url = `https://aqueous-bastion-42531.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => console.log(data))
            setProducts(rest);
        }
        else {
            return;
        }
    }

    return (
        <div>
            <Container className='mt-5 pt-5'>
                <h2>Manage Inventories</h2>
                {
                    products.map(product => 
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

export default ManageInventories;