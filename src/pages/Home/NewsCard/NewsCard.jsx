import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, author, image_url, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex gap-4 align-items-center'>
                <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                <div className='flex-grow-1'>
                    <h3 className='mb-0'>{author.name}</h3>
                    <p>{moment(author.published_date).format('YYYY-MM-DD')}</p>
                </div>
                <div>
                    <CiBookmark style={{ fontSize: '24px', fontWeight: 'semibold' }} />
                    <CiShare2 style={{ fontSize: '24px', fontWeight: 'semibold' }} />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='mb-4 mt-3' />
                <Card.Text>
                    {
                        details.length <= 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <br />
                            <Link className='text-warning' to={`/news/${_id}`}>Read More..</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <Rating
                        readonly
                        placeholderRating={rating.number}
                        emptySymbol={<CiStar />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                    ></Rating>
                    {'  '}
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;