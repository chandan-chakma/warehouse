import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Update = () => {
    const { inventoryId } = useParams();

    return (
        <div>
            <h2>welcome to :{inventoryId}</h2>
            <div className='m-3'>
                <Link to='/delivered'><button className='btn btn-success'>Delivered</button></Link>
            </div>
            <div>
                <Link to='/manageInventory'><button className='btn btn-primary'>Manage Inventories</button></Link>

            </div>



        </div>
    );
};

export default Update;