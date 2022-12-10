import React, {useEffect, useState} from "react";
import './main.css'
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH, IMAGE_PATH} from "../../../utils/constants";
import {toast} from "react-toastify";
import BookView from "../book-view";

const Popular = () => {

    const [popular, setBook] = useState({
        book: {
            img: '12345678-1234-1234-1234-123456789019',
            title: 'Kiss me Quick Limited Edition',
            context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
                ' sed do eiusmod tempor incididunt ut labore et dolore magna'
        },
        option: 'BOOK FAIR OFFER',
    });

    const getBook = () => {

        axios.get(
            BASE_PATH + "/book/popular",
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            setBook(res.data.data);
        }).catch(() => {
            toast.error('something went wrong')
        })
    }

    useEffect(() => {
        getBook();
    }, [])

    const [viewing, setViewing] = useState(false);

    const show = () => {
        setViewing(!viewing);
    }

    return(
        <div className={'popular'}>
            <div className={'popular-box'}>
                <img id={'popular'} src={BASE_PATH+IMAGE_PATH+popular.book.img} alt={'popular book'}/>
                <div className={'popular-box-context'}>
                    <p>{popular.book.option}</p>
                    <h1 className={'title'}>{popular.book.title}</h1>
                    <p>{popular.book.context}</p>
                    <button onClick={show} className={'open-context-btn btn'}>
                        READ MORE
                    </button>
                </div>

                {viewing ? <BookView book={popular.book} close={show}/> : ''}
            </div>
        </div>
    )
}

export default Popular;