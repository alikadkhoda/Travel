import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import FrontendLayout from '../layouts/FrontendLayout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Tour from '../pages/Tour';
import Tourism from '../pages/Tourism';
const routes=createBrowserRouter([
    {
        path:'/',
        element:<FrontendLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/tourism',
                element:<Tourism/>
            },
            {
                path:'/tour',
                element:<Tour/>
            },
            {
                path:'/sign-up',
                element:<SignUp/>
            }
        ]
    }
])
export default routes;