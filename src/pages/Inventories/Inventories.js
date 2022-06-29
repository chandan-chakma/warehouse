import React from 'react';
import UseInventories from '../../hook/UseInventories';
import Inventory from '../Inventory/Inventory';

import "./Inventories.css";


const Inventories = () => {
    const [inventories, setInventories] = UseInventories();

    return (
        <div className='container'>
            <h1 className='text-primary fw-bold p-3'>Our Inventory</h1>

            <div className='services'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}

                        inventory={inventory}
                    >

                    </Inventory>


                    )}

            </div>



        </div>
    );
};

export default Inventories;