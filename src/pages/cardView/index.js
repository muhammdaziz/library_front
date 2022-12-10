import React from "react";
import './main.css'
import BookCard from "../bookcard";

const CardView = ({data}) => {

    return(

        <div className={'cards'}>
            {data.map((book, index) =>
                <BookCard
                    book={book}
                    key={index}
                />
            )}
        </div>
    )
}

export default CardView;