import React from "react";
import NavBar from "../../component/main/navbar";
import Footer from "../../component/main/footer";
import DashboardComponent from "../../component/dashboard";
import {ACCESS_TOKEN} from "../../utils/constants";
import SignComponent from "../../component/sign-component";

const Dashboard = ({user}) => {

    if (localStorage.getItem(ACCESS_TOKEN))
        return(
            <>
                <NavBar user={user}/>

                <DashboardComponent user={user}/>

                <Footer/>
            </>
        )
    else
        return <SignComponent/>

}

export default Dashboard;