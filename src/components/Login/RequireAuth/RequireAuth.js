import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(!user) {
        return <Navigate to='/login' state={{from: location}} replace />;
    }

    if(!user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className="text-danger">Your email is not verified!</h3>
            <h5 className="text-success">Please verify your email!</h5>
            <button className='btn btn-success' onClick={async()=>{
                await sendEmailVerification();
                toast('Sent verification email.');
            }}>Send Verification Email Again</button>
        </div>
        
    }
    return children;
};

export default RequireAuth;