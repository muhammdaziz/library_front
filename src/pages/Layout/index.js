import React from "react";
import {ACCESS_TOKEN} from "../../utils/constants";
import {Navigate} from "react-router-dom";

const Layout = () => {

    if (!localStorage.getItem(ACCESS_TOKEN))
        return <Navigate to={'/sign'}/>

    return(<h1>layout</h1>)
}

export default Layout;