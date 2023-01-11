import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../carousel";
import {Row} from "react-bootstrap";
import NewBooks from "../new-books";
import AuthorBook from "../author-book";
import FeaturedBook from "../featured-book";
import Modal from "../modal";

const Home = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [book, setBook] = useState({});

    const openModal = (bookId) => {

        setShow(true);

        setBook({
            id: '0987-6543-21',
            title: 'react tutorial for java developers',
            price: '50',
            language: 'english',
            content: 'lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet',
            author: {
                name: 'mosh hamedani',
            },
            offer: 'read this conersational book by social media',
            discount: {
                percent: '20',
                price: '23'
            }
        })

        console.log(bookId);
    }

    return(
        <Container fluid style={{padding: '0 3%'}}>
            <Row style={{marginTop: '-15px', backgroundColor: 'rgb(254, 249, 234)'}}>
                <Carousel openModal={openModal}/>
            </Row>

            <Row>
                <NewBooks openModal={openModal}/>
            </Row>

            <AuthorBook/>

            <FeaturedBook openModal={openModal}/>

            {
                show
                ?
                <Modal show={show} book={book} handleClose={handleClose}/>
                :
                ''
            }
        </Container>
    )
}

export default Home;