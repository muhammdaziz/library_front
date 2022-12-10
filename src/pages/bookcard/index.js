import React from "react";
import './main.css'

const BookCard = ({book, index}) => {

    return(
        <div key={index} className={'bookCard'}>
            <div>
                <h4>{book.title}</h4>
                <p className={'author'}>{book.author}</p>
                <div>
                    <i><p className={'language'}>{book.language}</p></i>
                    <p>{book.context}</p>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className={'img-box'}>
                <img src={BASE_PATH + book.img} alt={'img'}/>
            </div>
            <div className={'control-box'}>
                <p>{book.price === 0 ? 'free' : book.price + ' $'}</p>
                <a download href={BASE_PATH + book.path}>DOWNLOAD</a>
            </div>
        </div>
    )
}

export default BookCard;