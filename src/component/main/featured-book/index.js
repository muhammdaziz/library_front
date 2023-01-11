import React, {useEffect, useState} from "react";
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH} from "../../../utils/constants";
import {toast} from "react-toastify";
import {Col, Row} from "react-bootstrap";
import './main.css'
import BookCard from "../book-card-2";
import Card from "react-bootstrap/Card";
import Pagination from "../pagination";

const FeaturedBook = ({openModal}) => {

    const [categories, setCategories] = useState([
        {
            id: '1',
            name: 'All'
        },
        {
            id: '2',
            name: 'Fantasy'
        },
        {
            id: '3',
            name: 'Literature'
        },
        {
            id: '4',
            name: 'History'
        },
        {
            id: '5',
            name: 'Art'
        },
        {
            id: '6',
            name: 'Recourse'
        }]);

    const [books, setBook] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    const [pageCount, setPageCount] = useState(5);

    const page = {
        page: 0,
        size: 4
    }

    const [active, setActive] = useState(1);

    const [activeCategory, setActiveCategory] = useState(-1);

    const selectCategory = (number) => {
        setActive(1);
        setActiveCategory(number);
    }

    const getBooks = () => {

        axios.get(
            BASE_PATH + "/book/list/"+active+"/"+page.size+"/"+activeCategory,
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

    useEffect(()=> {
        getBooks()
    }, [active, activeCategory] )

    return(
        <Row className={'featured-book-box'}>
            <h1>Featured Books</h1>

            <Col className={'category-box'}>
                {categories.map((category) =>
                    <button onClick={() => selectCategory(category.id)} className={'featured-book-box-btn btn'} key={category.id}>
                        {category.name}
                    </button>
                )}
            </Col>

            {books.length > 0 ?
                <>
                    <div style={{height: '60vh'}} className={'book-box'}>
                        {books.map((book, index) =>
                            <BookCard key={index} openModal={openModal} book={book}/>
                        )}
                    </div>

                    <Pagination action={setActive} active={active} page={pageCount}/>
                </>
            :
                <Card.Title>
                    No data
                </Card.Title>
            }

        </Row>
    )
}

export default FeaturedBook;