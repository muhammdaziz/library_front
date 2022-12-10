import React from "react";
import NavBar from "../navbar";
import Popular from "../popular";
import NewBooks from "../newBooks";
import NewAuthorBook from "../new-author-book";
import FeaturedBooks from "../featuredBooks";
import Footer from "../footer";

const Home = () => {

    return(
        <>
            <NavBar/>
            <Popular/>
            <NewBooks/>
            <NewAuthorBook/>
            <FeaturedBooks/>
            <Footer/>
        </>
    )
}

export default Home;