import React from 'react';
import UseServices from '../../hook/UseServices';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = UseServices();

    return (
        <div className='container'>
            <h1 className='text-primary fw-bold p-3'>Our services</h1>

            <div className='services'>
                {
                    services.map(service => <Service
                        service={service}

                    >

                    </Service>)
                }
            </div>



        </div>
    );
};

export default Services;