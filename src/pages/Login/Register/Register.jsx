import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const {user, createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const registerUser = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            setSuccess('Registered user successfully!');
            form.reset();
        })
        .catch(error => {
            setError(error.code);
        })
    }
    return (
        <Container className='w-50 mx-auto'>
            <h3>Register Now</h3>
            <Form onSubmit={registerUser} className='border p-3 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' id='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' id='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' id='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button variant="dark" className='w-100 py-2 fw-bold' type="submit">
                    Register
                </Button>
                <Form.Text className="text-dark mx-auto">
                    Already Have an account? <Link className='text-danger' to='/login'>Login Now.</Link>
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

export default Register;