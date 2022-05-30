import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';

const SocialLogin = () => {

    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (user || user1) {
        navigate('/')
    }

    let errorElement;
    if (error || error1) {
        <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
    }
    return (
        <div>
            {errorElement}
            <div>

                <button onClick={() => signInWithGoogle()} className='d-block w-50 mx-auto m-2 py-2 bg-primary text-white'>Google SignIn</button>

                <button onClick={() => signInWithGithub()} className='d-block w-50 mx-auto m-2 py-2 bg-black text-white'>Github SignIn</button>
            </div>

        </div>
    );
};

export default SocialLogin;