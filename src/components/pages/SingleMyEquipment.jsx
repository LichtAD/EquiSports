import React from 'react';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const SingleMyEquipment = ({ equipment, myEquipment, setMyEquipment }) => {

    // console.log(equipment);
    const { _id, email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = equipment;

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

                fetch(`http://localhost:5000/equisports/${id}`, {
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
            <div className="card card-compact bg-base-100 w-full h-[500px] shadow-xl border-2">
                <figure className="h-[70%]">
                    <img
                        className="h-full w-full object-cover"
                        src={image}
                        alt={item_name}
                    />
                </figure>
                <div className="flex justify-between p-4">
                    <div>
                        <h2 className="card-title">{item_name}</h2>
                        <p>Category Name: {category_name}</p>
                        <p>Price: {price}$</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="card-actions flex flex-col">
                        <div className="btn btn-primary"><FaPen size={20} /></div>
                        <div onClick={() => { handleDelete(_id) }} className="btn btn-error"><MdDelete className='text-white' size={20} /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleMyEquipment;