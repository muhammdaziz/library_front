import React from "react";
import NavBar from "../../component/main/navbar";
import Footer from "../../component/main/footer";
import HomeComponent from "../../component/main/home";
import {ACCESS_TOKEN} from "../../utils/constants";
import SignComponent from "../../component/sign-component";

const Home = ({user}) => {

    if (localStorage.getItem(ACCESS_TOKEN))
        return(
            <>
                <NavBar user={user}/>

                <HomeComponent/>

                <Footer/>
            </>
        )
    else
        return <SignComponent/>

}

export default Home;