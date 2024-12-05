import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const AddEquipment = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const navigate = useNavigate();

    const email = user?.email;
    const name = user?.displayName;

    const handleAddEquipment = (event) => {
        event.preventDefault();
        const form = event.target;
        const item_name = form.item_name.value;
        const category_name = form.category_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const image = form.image.value;

        const newEquipment = { email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image };
        // console.log(newEquipment);

        // ! send data to the server
        fetch('http://localhost:5000/equisports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                Swal.fire({
                    title: "Congratulation!",
                    text: "New Data has been added in the database!",
                    icon: "success",
                    confirmButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/equipmentList');
                    }
                })
            });
    }

    return (
        <div className='space-y-4 my-10'>
            <h1 className='text-3xl text-center font-bold'>
                <Fade delay={1e3} cascade damping={1e-1}>Add Equipment</Fade>
            </h1>
            <p className='text-center w-[80%] mx-auto'>Add your new sports equipment to our platform. Describe it as much as you can so that other users can understand what they are getting. Make sure to add a good image and to set a fair price.</p>

            <div className=''>
                <form onSubmit={handleAddEquipment}>
                    <div className='flex justify-center items-center flex-col my-4'>
                        <h1 className='text-2xl font-bold'>Email: {email}</h1>
                        <h2 className='text-2xl font-bold'>Name: {name}</h2>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name="item_name" placeholder="Enter Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" name="category_name" placeholder="Enter Category Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Enter Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Enter Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="Enter Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization" placeholder="Enter Customization" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="number" name="processing_time" placeholder="Enter Processing Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="number" name="stock_status" placeholder="Enter Stock Status" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Enter Image" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-8">
                        <button className="btn border-2 text-xl w-full">
                            Add Equipment
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddEquipment;