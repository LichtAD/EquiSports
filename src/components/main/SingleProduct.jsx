import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProduct = ({ product }) => {

    // console.log(product);

    const { _id, email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = product;

    return (
        <div>
            <div>
                {/* card */}
                <div className="card card-compact bg-base-100 w-full h-[500px] shadow-xl border-2">
                    <figure className="h-[70%]">
                        <img
                            className="h-full w-full object-cover"
                            src={image}
                            alt={item_name}
                        />
                    </figure>
                    <div className="p-4 space-y-4">
                        <h2 className="card-title">{item_name}</h2>
                        <p> Category: {category_name}</p>
                        <p> Price: {price}$</p>
                        <div className="card-actions">
                            <NavLink to={`/allEquipment/${_id}`} className="btn btn-primary">View Details</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;