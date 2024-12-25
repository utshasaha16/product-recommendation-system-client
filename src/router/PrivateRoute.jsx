import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate to={'/logIn'}></Navigate>
};

export default PrivateRoute;