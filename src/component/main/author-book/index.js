import React, {useEffect, useState} from "react";
import './main.css'
import axios from "axios";
import {BASE_PATH, ACCESS_TOKEN} from "../../../utils/constants";
import {toast} from "react-toastify";
import Img from '../../../assets/img/Screenshot 2022-12-21 at 0.03.19.png'
import {Col, Row} from "react-bootstrap";

const NewAuthorBook = () => {

    const [newBook, setNewBook] = useState({
        fontSize: '19px',
        name: 'Lorem ipsum',
        fontFamily: 'Zapfino, serif',
        bgImage: '12345678-1234-1234-1234-123456789019',
        bookImage: '12345678-1234-1234-1234-123456789019',
        authorImage: '12345678-1234-1234-1234-123456789019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    })

    const [style, setStyle] = useState({
        backgroundImage: 'url("'+BASE_PATH+'/api/files/images/' + newBook.bgImage +'")'
    })

    const fontStyle = {
        fontFamily: 'Zapfino, serif',
        fontSize: '19px',
        lineHeight: '300%'
    }

    const getBook = () => {

        axios.get(
            BASE_PATH + "/book/new-author",
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            setNewBook(res.data.data);
            if (newBook.fontFamily)
                fontStyle.fontFamily = newBook.fontFamily;
            if (newBook.fontSize)
                fontStyle.fontSize = newBook.fontSize;
            if (newBook.bgImage)
                setStyle({backgroundImage: 'url("'+BASE_PATH + '/api/files/images/'+ newBook.bgImage + '")'});
        }).catch(() => {
            toast.error('something went wrong')
        })
    }

    useEffect(() => {
        getBook();
    }, [])


    return(
        <Row style={{zIndex: '999'}} className={'new-author-book'}>
            <Col sm={6} style={style} className={'author-book-image-box'}>
                <img id={'author-img'}
                     // src={BASE_PATH + "/files/images/"+ newBook.authorImage}
                    src={Img}
                     alt={'author image'}/>
                <img id={'book-img'}
                     // src={BASE_PATH + "/files/images/"+newBook.bookImage}
                     src={Img}
                     alt={'book image'}/>
            </Col>

            <Col sm={6} className={'author-book-text-box'}>
                <h2 style={fontStyle}>
                    "{newBook.text}"
                </h2>

                <p className={'author-book-name'}>
                    – {newBook.name}
                </p>

                <button className={'author-book-btn btn'}>
                    VIEW MORE
                </button>
            </Col>
        </Row>
    )
}

export default NewAuthorBook;