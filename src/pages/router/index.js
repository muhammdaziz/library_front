import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignPage from "../sign";
import NotFound from "../not-found";
import Home from "../../store/pages/home";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/sign",
            element: <SignPage/>
        },
        {
            path: "/404",
            element: <NotFound/>

        }
    ]);

    return (
        <>
            <RouterProvider
                router={router}
            />
        </>
    );
}

export default Router;