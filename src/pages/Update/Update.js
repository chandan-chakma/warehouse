import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Update = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2>welcome to :{serviceId}</h2>
            <Link to='/delivered'><button>Delivered</button></Link>


        </div>
    );
};

export default Update;