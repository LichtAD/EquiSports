// all sports equipment page - 2nd in nav
import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { BsSortNumericDownAlt } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const AllEquipment = () => {

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    const [equipment, setEquipment] = useState(loadedEquipment);

    // ! sorting by price : in client
    // // const [sort, setSort] = useState('');
    // const handleSort = (sortType) => {
    //     // setSort(sortType);

    //     if (sortType === 'Price_ASC') {
    //         const sortedEquipment = [...equipment].sort((a, b) => b.price - a.price);
    //         setEquipment(sortedEquipment);
    //     }
    // }

    // ! sorting by price : in server
    const handleSort = (sortType) => {
        if (sortType === 'Price_ASC') {
            fetch(`http://localhost:5000/equisports-sort`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setEquipment(data);
                })
        }
    }

    return (
        <div>
            <div className='my-4 flex justify-between items-center'>
                <div></div>
                <h1 className='text-3xl font-bold'>
                    <Fade delay={1e3} cascade damping={1e-1}>All Equipment</Fade>
                </h1>
                <div>
                    <button onClick={() => handleSort('Price_ASC')} className='btn border-black rounded-full'>Sort by Price <BsSortNumericDownAlt size={20} /></button>
                </div>
            </div>

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
                            equipment.map((equipment, index) => <tr key={equipment._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{equipment.item_name}</td>
                                <td>{equipment.category_name}</td>
                                <td>{equipment.price}</td>
                                <td><NavLink to={`/allEquipment/${equipment._id}`} className='btn btn-xs'>View Details</NavLink></td>
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