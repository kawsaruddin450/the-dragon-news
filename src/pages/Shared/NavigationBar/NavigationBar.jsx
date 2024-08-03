import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import userPic from '../../../assets/user.png';

const NavigationBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(result => console.log("log out"))
        .then(error => console.log(error.code));
    }

    return (
        <Container className='mb-5'>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='me-2 text-decoration-none text-dark' to='/category/0'>Home</Link>
                            <Link className='me-2 text-decoration-none text-dark' to='/'>About</Link>
                            <Link className='text-decoration-none text-dark' to='/'>Contact</Link>
                        </Nav>
                        <Nav>
                            <img width="40" className='me-3' src={userPic} alt="" />
                            {
                                user ?
                                    <Button variant="secondary" onClick={handleSignOut}>Log Out</Button> :
                                    <Link to='/login'><Button variant="secondary">Log In</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;