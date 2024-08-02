import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const {image_url, _id, title, details, category_id} = news;
    return (
        <div>
            <Card style={{padding: '30px'}}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title style={{fontSize: '25px', fontWeight:'bold'}}>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button className='mt-4' variant="danger">
                        <Link className='text-decoration-none text-light fw-bold' to={`/category/${category_id}`}><FaArrowLeft />  All news in this category</Link>
                    </Button>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;