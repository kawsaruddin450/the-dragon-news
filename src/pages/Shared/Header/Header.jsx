import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import userPic from '../../../assets/user.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container className='my-5'>
            <div className="text-center">
                <img src={logo} alt="The Dragon News logo" />
                <p className='mt-2 text-secondary'>Journalism Without Fear or Favour</p>
                <p className='fw-semibold'>{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
            <div className='d-flex p-2 bg-body-secondary'>
                <Button variant="danger">Latest</Button>
                <Marquee className='fw-semibold' pauseOnHover>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#">
                                <Link className='text-decoration-none text-dark' to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">
                                <img width="40" src={userPic} alt="" />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                                {
                                    user ? 
                                    <Button variant="secondary">Log Out</Button> :
                                    <Link to='/login'><Button variant="secondary">Log In</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;