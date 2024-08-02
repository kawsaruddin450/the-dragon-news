import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is News: {id}</h2>
        </div>
    );
};

export default News;