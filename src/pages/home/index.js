import React from "react";
import Bar from "../bar/side-bar";
import Dashboard from "../dashboard";
import NavBar from "../bar/nav-bar";
import {ACCESS_TOKEN} from "../../utils/constants";
import {Navigate} from "react-router-dom";

const Home = () => {

    const main = {
        width: '100%',
        overflow: 'hidden'
    }

    const user = {
        name: 'Jon',
        role: 'super admin'
    }

    const style = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    }

    if (!localStorage.getItem(ACCESS_TOKEN))
        return <Navigate to={'/sign'}/>
    else {

        return (
            <div style={main}>
                <NavBar/>
                <div style={style}>
                    <Bar user={user}/>
                    <Dashboard/>
                </div>
            </div>
        )
    }
}

export default Home;