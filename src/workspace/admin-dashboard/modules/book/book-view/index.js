import React from "react";
import './main.css'
import AddBtn from "../../../add-btn";
import View from "./view";

const BookViewPage = ({book, changeModule, creating}) => {



    return(
        <>
            <div className={'book-view-header'}>
                <h2>BOOK: {book?.name}</h2>
                <AddBtn openAddModule={changeModule}/>
            </div>

            <View book={book} changeModule={changeModule} creating={creating}/>
        </>
    )
}

export default BookViewPage;