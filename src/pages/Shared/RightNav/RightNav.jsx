import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h2 className='fw-bold mb-3'>Login With</h2>
            <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className='mb-4'>
                <h4 className='fw-semibold mb-2 mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <a className='text-decoration-none text-secondary fw-medium' href='#'><FaFacebook /> Facebook</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a className='text-decoration-none text-secondary fw-medium' href='#'><FaTwitter /> Twitter</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a className='text-decoration-none text-secondary fw-medium' href='#'><FaInstagram /> Instagram</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;