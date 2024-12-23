import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/common/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;