import React from "react";
import Actions from "../../actions";
import ListView from "./listView";

const BookView = ({create, edit}) => {


    return(
        <>
            <h2>BOOK</h2>
            <Actions openAddModule={create}/>
            <ListView openEditModule={edit}/>
        </>
    )
}

export default BookView;