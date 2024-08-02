import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container className='mt-5'>
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
        </Container>
    );
};

export default Header;