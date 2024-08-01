import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-body-secondary p-2 rounded'>
            <h4 className='fw-semibold'>Q-Zone</h4>
            <img src={qzone1} alt="" className='img-fluid' />
            <img src={qzone2} alt="" className='img-fluid' />
            <img src={qzone3} alt="" className='img-fluid' />
        </div>
    );
};

export default QZone;