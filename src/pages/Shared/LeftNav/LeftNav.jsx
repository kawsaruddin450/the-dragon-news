import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <h2 className='fw-semibold'>All Category</h2>
            <div className='p-4 mt-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;