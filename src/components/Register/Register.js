import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        console.log(user);
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
        </div>
    );
};

export default Register;