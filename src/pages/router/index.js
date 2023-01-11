import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "../not-found";
import {ACCESS_TOKEN, BASE_PATH} from "../../utils/constants";
import axios from "axios";
import {toast} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../home";
import SignPage from "../sign"
import Dashboard from "../dashboard";
import Example from "../../component/dashboard/off-canva";

const Router = () => {

    const [user, setUser] = useState({
        firstname: 'admin',
        lastname: 'super',
        pages: ['Home', 'Shop', 'Promotions', 'About us', 'Blog', 'Pages', 'For Admin'],
        avatar: '../../../assets/img/logo.png',
        username: 'muhammdaziz'
    });

    const getUser = () => {
        axios.get(
            BASE_PATH + "/user/me",
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            })
            .then(res => {
                setUser(res.data.data)
            })
            .catch(err => {
                toast.error(err.response.data.errors[0].msg);
            })
    }

    useEffect(() =>
        {
            getUser();
        }, []
    )

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home user={user}/>
        },
        {
            path: "/home",
            element: <Home user={user}/>
        },
        {
            path: "/sign",
            element: <SignPage/>
        },
        {
            path: "/dashboard",
            element: <Dashboard user={user}/>
        },
        {
            path: "/404",
            element: <NotFound/>
        },
        {
            path: "/11",
            element: <Example/>
        },
    ]);

    return(
        <RouterProvider
            router={router}
        />
    )
}

export default Router;