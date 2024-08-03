import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2 className='fw-bold text-center my-3'>Our Terms And Conditions: </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae doloremque tempora et exercitationem voluptas harum excepturi dignissimos sunt numquam ea ad, nam nulla magnam maiores praesentium necessitatibus vero voluptate. Unde veniam voluptates, at porro nisi mollitia odit officia asperiores nesciunt.</p>
            <p>Go back to  <Link className='text-decoration-none text-warning fw-medium' to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;