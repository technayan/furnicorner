import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const Register = () => {
    return (
        <div className="form-wrapper p-3 p-md-4 mx-auto">
                    <h2 className='text-center form-title'>Register</h2>
                    <form className='d-flex flex-column'>
                        <input className='p-2 my-2' type="text" name='name' placeholder='Enter Name' />
                        <input className='p-2 my-2' type="email" name='email' placeholder='Enter Email' />
                        <input className='p-2 my-2' type="text" name='username' placeholder='Username' />
                        <input className='p-2 my-2' type="password" name='password' placeholder='Password' />
                        <input className='p-2 my-2 submit-btn rounded text-white' type="submit" value="Register" />
                    </form>
                    <p className='mt-3 mb-2'>Already have an account? <Link to={'/login'} element={<Login />}>Login</Link></p>
                </div>
    );
};

export default Register;