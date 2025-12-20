import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Componet/Navber/Navber';
import Footer from "../Componet/Footer/Footer";


const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;