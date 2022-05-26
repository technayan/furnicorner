import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Register from '../Register/Register';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
 

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        await signInWithEmailAndPassword(email, password);
    }

    // Signin with Google
    const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);
    
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    if (user || user1) {
        navigate(from, {replace : true});
    }

    return (
        <div>
            <Container>
                <div className="form-wrapper p-3 p-md-4 mx-auto">
                    <h2 className='text-center form-title'>Login</h2>
                    <form onSubmit={handleLogin} className='d-flex flex-column'>
                        <input className='p-2 my-2' type="text" name='email' placeholder='Enter Email' />
                        <input className='p-2 my-2' type="password" name='password' placeholder='Password' />
                        <input className='p-2 my-2 submit-btn rounded text-white' type="submit" value="Login" />
                    </form>
                    <p >Don't have an account? <Link to={'/register'} element={<Register />}>Register</Link></p>
                    <p className="divider">OR</p>
            <button onClick={handleSignInWithGoogle} className="google-sign-in d-flex rounded p-2 justify-content-center w-100"><i className="ri-google-fill me-1"></i> Sign Up with Google</button>
                </div>
            </Container>
        </div>
    );
};

export default Login;