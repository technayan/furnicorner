import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
import { toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate();

    // Register with Email and Password
    const [
        createUserWithEmailAndPassword,
        user,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);


    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        await sendEmailVerification();
    }


    // Signin with Google
    const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    if (user || user1) {
        navigate('/');
    }

    if (error) {
        toast('Email is already taken!');
    }


    return (
        <div className="form-wrapper p-3 p-md-4 mx-auto">
            <h2 className='text-center form-title'>Register</h2>
            <form onSubmit={handleRegister} className='d-flex flex-column'>
                <input className='p-2 my-2' type="text" name='name' placeholder='Enter Name' required/>
                <input className='p-2 my-2' type="email" name='email' placeholder='Enter Email' required/>
                <input className='p-2 my-2' type="password" name='password' placeholder='Password' required/>
                
                <input className='p-2 my-2 submit-btn rounded text-white' type="submit" value="Register" />
            </form>
            <p className='mt-3 mb-2'>Already have an account? <Link to={'/login'} element={<Login />}>Login</Link></p>
            <p className="divider">OR</p>
            <button onClick={handleSignInWithGoogle} className="google-sign-in d-flex rounded p-2 justify-content-center w-100"><i className="ri-google-fill me-1"></i> Sign Up with Google</button>
        </div>
    );
};

export default Register;