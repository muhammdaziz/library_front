import React from "react";
import {ACCESS_TOKEN} from "../../utils/constants";
import 'react-toastify/dist/ReactToastify.css';
import SignComponent from "../sign-component";
import {Navigate} from "react-router-dom";

const SignPage = () => {

    if (localStorage.getItem(ACCESS_TOKEN))
        return <Navigate to={'/'}/>;
    else
        return (
            <SignComponent/>
        )
}

export default SignPage;