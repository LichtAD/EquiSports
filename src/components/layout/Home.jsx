import React from 'react';
import Slide from '../main/Slide';
import Product from '../main/Product';
import SportsCategories from '../pages/SportsCategories';
import { useLoaderData } from 'react-router-dom';
import Banner from '../main/Banner';
import ContactUs from '../main/ContactUs';

const Home = () => {

    const slicedProducts = useLoaderData();
    // console.log(slicedProducts);

    return (
        <div>
            {/* <h2>Home</h2> */}
            <Banner></Banner>
            <Slide></Slide>
            <Product slicedProducts={slicedProducts}></Product>
            <SportsCategories></SportsCategories>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;