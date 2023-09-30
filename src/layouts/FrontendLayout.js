import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const FrontendLayout = () => {
    return ( 
        <div>
            <ScrollRestoration/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default FrontendLayout;