import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItems.css'

const AddItems = () => {

    const [user] = useAuthState(auth); 

    const email = user.email;

    const handleAddItem = e => {
        e.preventDefault();
        const newProduct = {
            name : e.target.name.value,
            imageUrl : e.target.imageUrl.value,
            description : e.target.description.value,
            price: e.target.price.value,
            quantity : e.target.quantity.value,
            supplier : e.target.supplier.value,
            email: email,
        }

        

        fetch(`https://aqueous-bastion-42531.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                alert('Product Added');
            }
        })

        e.target.reset();

}

    

    return (
        <div>
            <Container className='mt-5 pt-5'>
                <h2 className='text-center mb-4'>Add Item</h2>
                <form onSubmit={handleAddItem} className='add-items-form p-3 mx-auto'>
                    <input type="text" className='w-100 p-2 my-2' name='name' placeholder='Product Name' required />
                    <input type="text" className='w-100 p-2 my-2' name='imageUrl' placeholder='Product Image URL' required />
                    <textarea name='description' className='w-100 p-2 my-2' placeholder='Product Description' required />
                    <input type="number" className='w-100 p-2 my-2' name='price' placeholder='Product Price' required />
                    <input type="number" className='w-100 p-2 my-2' name='quantity' placeholder='Product Quantity' required />
                    <input type="text" className='w-100 p-2 my-2' name='supplier' placeholder='Product Supplier' required />
                    <input type="submit" className='add-item-btn w-100 p-2 my-2' value='Add Item' />
                </form>
            </Container>
        </div>
    );
};

export default AddItems;