import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from './../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../sharePages/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );


    const navigateToRegistered = () => {
        navigate('/registered')
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send Email')

        }
        else {
            toast('enter your email address')
        }


    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container w-50 mx-auto text-start'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to warehouse? <Link to='/registered' onClick={navigateToRegistered}>Pleased Registered</Link></p>

            <p>Forget password? <button onClick={() => resetPassword()}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </div>

    );
};

export default Login;