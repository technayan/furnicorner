import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
import './Login.css'

const Login = () => {
    return (
        <div>
            <Container>
                <div className="form-wrapper p-3 p-md-4 mx-auto">
                    <h2 className='text-center form-title'>Login</h2>
                    <form className='d-flex flex-column'>
                        <input className='p-2 my-2' type="text" name='username' placeholder='Username' />
                        <input className='p-2 my-2' type="password" name='password' placeholder='Password' />
                        <input className='p-2 my-2 submit-btn rounded text-white' type="submit" value="Login" />
                    </form>
                    <p className='mt-3 mb-2'>Forgot password? <a href="js:void">Reset Password</a></p>
                    <p >Don't have an account? <Link to={'/register'} element={<Register />}>Register</Link></p>
                </div>
            </Container>
        </div>
    );
};

export default Login;