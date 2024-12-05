import React from 'react';
import SingleProduct from './SingleProduct';

const Product = ({ slicedProducts }) => {

    // console.log(slicedProducts);

    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl font-bold my-4'>Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    slicedProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Product;