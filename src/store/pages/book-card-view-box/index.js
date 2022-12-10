import React from "react";
import CardView from "../cardView";
import './main.css'

const BookCardViewBox = ({books, style}) => {

    return(
        <div style={style} className={'card-view-box'}>
            {books.map((book, index) =>
                <CardView key={index} book={book}/>)}
        </div>
    )
}

export default BookCardViewBox;