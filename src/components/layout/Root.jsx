import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen max-w-7xl mx-auto px-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer />
        </div>
    );
};

export default Root;