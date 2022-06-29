import React from 'react';
import { Link } from 'react-router-dom';

import UseInventories from '../../hook/UseInventories';
import './ManageInventory.css';



const ManageInventory = () => {
    const [inventories, setInventories] = UseInventories()



    return (
        <div>
            <h2>Manage inventory</h2>
            <Link to='/additem'>
                <button className='btn btn-primary'>Add Item</button>
            </Link>

            <div className='w-50 mx-auto'>

                {
                    inventories.map(inventory => <div
                        key={inventory._id}
                        className='d-flex justify-content-between manage'>
                        <div className='d-flex align-items-end justify-content-center'>
                            <img className='pe-3' src={inventory.img} alt="" />
                            <div>
                                <h4>{inventory.name}</h4>
                                <p>price:{inventory.price}</p>
                            </div>
                        </div>



                        <div>
                            <button className='btn btn-danger'>Delete</button>
                        </div>

                    </div>)

                }

            </div>


        </div >
    );
};

export default ManageInventory;