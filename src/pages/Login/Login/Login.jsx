import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {
    const {user, logInUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Logged in successfully.');
            form.reset();
            navigate('/');
        })
        .catch(error => {
            setError(error.code)
        })
    }
    return (
        <Container className='w-50 mx-auto'>
            <h3>Login Now</h3>
            <Form onSubmit={handleLogin} className='border p-3 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' id='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' id='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="dark" className='w-100 py-2 fw-bold' type="submit">
                    Log In
                </Button>
                <Form.Text className="text-dark mx-auto">
                    Don't Have an account? <Link className='text-danger' to='/register'>Register Now.</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;