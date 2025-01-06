import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='relative'>
            <div className='fixed top-0 -left-20 lg:left-0 -right-20 lg:right-0 z-10 px-20 md:px-20 lg:px-0 bg-white'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-screen max-w-7xl mx-auto px-4 mt-28'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer />
        </div>
    );
};

export default Root;