import React, { useContext } from 'react';
import { AuthContext } from './components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './components/pages/Loading';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    // console.log(location);

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;