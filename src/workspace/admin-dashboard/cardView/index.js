import React from "react";
import './main.css'
import BookCard from "../../../pages/bookcard";

const CardView = ({books}) => {

    return(

        <div className={'cards'}>
            {books?.map((book, index) =>
                <BookCard
                    book={book}
                    key={index}
                />
            )}
        </div>
    )
}

export default CardView;