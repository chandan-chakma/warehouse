import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
};

export default UseServices;