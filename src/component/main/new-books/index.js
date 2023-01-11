import React, {useEffect, useState} from "react";
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH} from "../../../utils/constants";
// import BookCardViewBox from "../book-card-view-box";
import {toast} from "react-toastify";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import './main.css';
import CustomOwlCarousel from "../custom-owl-carousel";

const NewBooks = ({openModal}) => {

    const pageContent = {
        title: 'New added Books',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }

    const [books, setBook] = useState([{}, {}, {}, {}, {}, {}, {}]);

    const getBooks = () => {
        axios.get(
            BASE_PATH + "/book/list/popular",
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
        // getBooks();
    }, [])

    const style = {
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    }

    return(
        <Container className={'new-book-page'}>
            <Row className={'title'} style={{fontFamily: 'Menlo, Monaco, Consolas, Cantarell, serif'}}>
                <h1>{pageContent.title}</h1>
                <p>{pageContent.text}</p>
            </Row>

            <Row>
                <CustomOwlCarousel openModal={openModal}/>
            </Row>
        </Container>
    )
}

export default NewBooks;