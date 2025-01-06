// all sports equipment page - 2nd in nav
import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { BsSortNumericDownAlt } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import SingleProduct from '../main/SingleProduct';

const AllEquipment = () => {

    const { theme } = useContext(AuthContext);

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
            fetch(`https://equi-sports-server-three.vercel.app/equisports-sort`, {
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Equipment | EquiSports</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='my-4 flex justify-between items-center'>
                <div></div>
                <h1 className='text-3xl font-bold'>
                    <Fade delay={1e3} cascade damping={1e-1}>All Equipment</Fade>
                </h1>
                <div>
                    <button onClick={() => handleSort('Price_ASC')} className={`btn ${theme === 'dark' ? 'border-white' : 'border-black'} rounded-full`}>Sort by Price <BsSortNumericDownAlt size={20} /></button>
                </div>
            </div>

            {/* <div className="overflow-x-auto grid grid-cols-3 gap-5 mb-10"> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {/* <table className="table">
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
                                <td><NavLink to={`/allEquipment/${equipment._id}`} className='btn btn-md lg:btn-xs'>View Details</NavLink></td>
                            </tr>)
                        }
                    </tbody>
                </table> */}

                {
                    equipment.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }

                {/* <div className="card card-compact bg-base-100 w-96">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default AllEquipment;