// all sports equipment page - 2nd in nav
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllEquipment = () => {

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    // const { _id, email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = loadedEquipment;

    return (
        <div>
            <h1>All Equipment</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedEquipment.map((equipment, index) => <tr key={equipment._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{equipment.item_name}</td>
                                <td>{equipment.category_name}</td>
                                <td>{equipment.price}</td>
                                <td><button className='btn btn-xs'>View Details</button></td>
                            </tr>)
                        }

                        {/* row 1 */}
                        {/* <tr className="hover">
                            <th>1</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;