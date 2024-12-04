import React from 'react';

const SingleMyEquipment = ({ equipment }) => {

    // console.log(equipment);
    const { _id, email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = equipment;

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={item_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{email}</h2>
                    <p>{item_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMyEquipment;