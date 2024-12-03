import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1>Nav</h1>
            <Outlet></Outlet>
            <h6>Footer</h6>
        </div>
    );
};

export default Root;