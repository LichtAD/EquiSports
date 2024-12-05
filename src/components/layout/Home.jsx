import React from 'react';
import Slide from '../main/Slide';
import Product from '../main/Product';
import SportsCategories from '../pages/SportsCategories';

const Home = () => {
    return (
        <div>
            {/* <h2>Home</h2> */}
            <Slide></Slide>
            <Product></Product>
            <SportsCategories></SportsCategories>
        </div>
    );
};

export default Home;