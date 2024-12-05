import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleEquipment = () => {

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    const { _id, email, name, item_name, category_name, description, price, rating, customization, processing_time, stock_status, image } = loadedEquipment;

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-4'>Equipment Details</h2>

            <div className="flex justify-center items-center gap-4 mt-8">
                <div className="flex bg-base-100 w-full h-[500px] shadow-xl rounded-xl">
                    <figure className='w-[50%]'>
                        {/* bg-cover bg-center bg-no-repeat */}
                        <img className='h-full w-full object-cover rounded-tl-lg rounded-bl-lg'
                            src={image}
                            alt={item_name} />
                    </figure>
                    <div className="p-4 space-y-8 bg-white rounded-lg ml-10">
                        <h3 className="text-3xl font-bold">{item_name}</h3>
                        <p className="text-lg font-medium">Category: {category_name}</p>
                        <p className="text-lg">{description}</p>
                        <p className="font-medium">Price: ${price}</p>
                        <p className="font-medium">Rating: {rating}</p>
                        <p className="font-medium">Customization: {customization}</p>
                        <p className="font-medium">Processing Time: {processing_time} days</p>
                        <p className="font-medium">Stock Status: {stock_status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEquipment;
