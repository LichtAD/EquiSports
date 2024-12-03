import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;