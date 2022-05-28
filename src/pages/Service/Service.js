import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img, supplier } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <h6>{supplier}</h6>

        </div>
    );
};

export default Service;