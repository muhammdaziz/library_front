import React, {useEffect, useState} from "react";
import './main.css';
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH} from "../../../utils/constants";
import BookCardViewBox from "../book-card-view-box";
import {toast} from "react-toastify";

const NewBooks = () => {

    const pageContent = {
        title: 'New Release Books',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }

    const [books, setBook] = useState([]);

    const getBooks = () => {
        axios.get(
            BASE_PATH + "/api/book/list/news",
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            setBook(res.data.data)
        }).catch(() => {
            toast.error('something went wrong')
        })
    }

    useEffect(() => {
        getBooks();
    }, [])

    const style = {
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    }

    return(
        <div className={'new-book-page'}>
            <div className={'title'}>
                <h1>{pageContent.title}</h1>
                <p>{pageContent.text}</p>
            </div>

            <BookCardViewBox books={books} style={style}/>
        </div>
    )
}

export default NewBooks;