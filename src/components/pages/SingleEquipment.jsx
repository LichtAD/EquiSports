import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleEquipment = () => {

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    const { _id, email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = loadedEquipment;

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-4'>SingleEquipment</h2>

            <div className="flex justify-center items-center gap-4">
                <div className="card card-side bg-base-100 shadow-xl border-2">
                    <figure>
                        {/* bg-cover bg-center bg-no-repeat */}
                        <img className='h-96'
                            src={image}
                            alt={item_name} />
                    </figure>
                    <div className="card-body">
                        <h3>Item Name: {item_name}</h3>
                        <p>Description: {description}</p>
                        <p>Price: ${price}</p>
                        <p>Rating: {rating}</p>
                        <p>Customization: {customization}</p>
                        <p>Processing Time: {processing_time} days</p>
                        <p>Stock Status: {stock_status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEquipment;
