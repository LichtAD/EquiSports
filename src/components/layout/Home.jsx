import React from 'react';
import Slide from '../main/Slide';
import Product from '../main/Product';
import SportsCategories from '../pages/SportsCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const slicedProducts = useLoaderData();
    // console.log(slicedProducts);

    return (
        <div>
            {/* <h2>Home</h2> */}
            <Slide></Slide>
            <Product slicedProducts={slicedProducts}></Product>
            <SportsCategories></SportsCategories>
        </div>
    );
};

export default Home;