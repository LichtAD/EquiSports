// my equipment list - 4th in nav
import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import SingleMyEquipment from './SingleMyEquipment';
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const EquipmentList = () => {

    const { user } = useContext(AuthContext);

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    const filterdData = loadedEquipment.filter(data => data.email === user?.email);
    // console.log(filterdData);

    const [myEquipment, setMyEquipment] = useState(filterdData);

    // delete equipment
    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://equi-sports-server-three.vercel.app/equisports/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your equipment has been deleted.',
                                'success'
                            )
                            const remaining = myEquipment.filter(equipment => equipment._id !== id);
                            setMyEquipment(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Equipment | EquiSports</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className='text-center text-3xl font-bold my-4'>
                <Fade delay={1e3} cascade damping={1e-1}>My Equipment</Fade>
            </h1>
            <div className='my-4'>
                {/* <h3 className='text-center text-3xl font-bold'>Equipment List</h3> */}
                <h1 className='text-center text-2xl font-bold'>Name: {user?.displayName}</h1>
                <h2 className='text-center text-2xl font-bold'>Email: {user?.email}</h2>
            </div>

            {/* card */}
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    myEquipment.map((equipment, index) => <SingleMyEquipment key={index} equipment={equipment} myEquipment={myEquipment} setMyEquipment={setMyEquipment}></SingleMyEquipment>)
                }
            </div> */}

            {/* table */}
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEquipment.map((equipment, index) => <tr key={index} className="hover">
                                <th>{index + 1}</th>
                                <td><img className='w-12 h-12 rounded-full' src={equipment.image} alt="" /></td>
                                <td>{equipment.item_name}</td>
                                <td>{equipment.category_name}</td>
                                <td>${equipment.price}</td>
                                <td>{equipment.rating}</td>
                                <td><NavLink to={`/equipmentList/${equipment._id}`} className='btn btn-xs text-white btn-primary'>Update</NavLink></td>
                                <td><button onClick={() => { handleDelete(equipment._id) }} className='btn btn-xs text-white btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EquipmentList;