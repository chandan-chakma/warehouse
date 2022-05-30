import { async } from '@firebase/util';
import { Toast } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../sharePages/SocialLogin/SocialLogin';
import './Registered.css';

const Registered = () => {
    const [agree, setAgree] = useState(false)
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const navigateToLogin = () => {
        navigate('/login')

    }
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger text-center'>Error: {error?.message} {error.message}</p>
            </div>
    }

    const handleRegistered = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(name, email, password)
    }
    return (
        <div className='container w-50 mx-auto text-start'>
            <h2>Please Registered</h2>
            <Form onSubmit={handleRegistered}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="email" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Terms and condition" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Registered
                </Button>
                {errorElement}
            </Form>
            <p>New to warehouse? <Link to='/login' onClick={navigateToLogin}>Pleased Login</Link></p>


            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Registered;