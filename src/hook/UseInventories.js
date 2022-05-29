import { useEffect, useState } from 'react';

const UseInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return [inventories, setInventories]
};

export default UseInventories;