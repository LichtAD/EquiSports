import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateMyEquipment = () => {

    const navigate = useNavigate();

    const { user, theme } = useContext(AuthContext);

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    const { _id, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = loadedEquipment;

    // console.log(item_name);

    const email = user?.email;
    const name = user?.displayName;

    const handleUpdateEquipment = event => {
        event.preventDefault();
        const form = event.target;
        const item_name = form.item_name.value;
        const category_name = form.category_name.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const customization = form.customization.value;
        const processing_time = parseFloat(form.processing_time.value);
        const stock_status = parseFloat(form.stock_status.value);
        const image = form.image.value;

        const updateEquipment = { item_name, category_name, description, price, rating, customization, processing_time, stock_status, image };
        // console.log(updateEquipment);

        // ! need to send data to the server
        fetch(`https://equi-sports-server-three.vercel.app/equisports/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateEquipment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your equipment has been updated!",
                        icon: "success"
                    });
                    // form.reset();
                    navigate('/equipmentList');
                }
            })
    }

    return (
        <div className='my-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update My Equipment | EquiSports</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h3 className='text-center text-3xl font-bold my-4'>Update My Equipment</h3>

            <div className=''>
                <form onSubmit={handleUpdateEquipment}>
                    <div className='flex justify-center items-center flex-col my-4'>
                        <h1 className='text-2xl font-bold'>Email: {email}</h1>
                        <h2 className='text-2xl font-bold'>Name: {name}</h2>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name="item_name" defaultValue={item_name} placeholder="Enter Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" name="category_name" defaultValue={category_name} placeholder="Enter Category Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={description} placeholder="Enter Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization" defaultValue={customization} placeholder="Enter Customization" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="number" name="processing_time" defaultValue={processing_time} placeholder="Enter Processing Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="number" name="stock_status" defaultValue={stock_status} placeholder="Enter Stock Status" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="Enter Image" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-8">
                        <button className={`btn ${theme === 'dark' ? 'bg-slate-900 text-[#A6ADBB]' : 'bg-slate-200'} text-xl w-full`}>
                            Update Equipment
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateMyEquipment;