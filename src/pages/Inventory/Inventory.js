import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'


const Inventory = ({ inventory }) => {
    const { _id, name, price, description, img, supplier } = inventory;
    const navigate = useNavigate();
    const handleUpdate = (_id) => {
        navigate(`/inventory/${_id}`)
    }

    return (

        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <h6>{supplier}</h6>
            <button onClick={() => handleUpdate(_id)}>Update</button>

        </div>






    );
};

export default Inventory;