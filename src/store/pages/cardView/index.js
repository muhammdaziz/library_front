import React, {useState} from "react";
import {BASE_PATH} from "../../../pages/constants";
import './main.css'
import BookView from "../book-view";
import {IMAGE_PATH} from "../../../utils/constants";

const CardView = ({book}) => {

    const [viewing, setViewing] = useState(false);

    const show = () => {
        setViewing(!viewing);
    }

    return(
        <div className={'card-view'}>
            <button className={'card-book-btn btn'} onClick={show}>
                <img src={BASE_PATH+IMAGE_PATH+book.img}  alt={'book img'}/>
            </button>
            <p className={'card-book-author'}>{book.author}</p>
            <h3 className={'card-book-title'}>{book.title}</h3>
            <p className={'card-book-price'}>{book.price === 0 ? 'FREE' : book.price + ' $'}</p>

            {viewing ? <BookView book={book} close={show}/> : ''}
        </div>
    )
}

export default CardView;