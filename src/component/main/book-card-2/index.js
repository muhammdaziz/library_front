import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Img from '../../../assets/img/Screenshot 2022-12-21 at 0.03.19.png'
import DiscountRow from "../discount-row";

const BookCard = ({openModal}) => {

    const book = {
        id: '1234-5432',
        title: 'react tutorial for java developers',
        price: '50',
        content: 'lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet',
        author: {
            name: 'mosh hamedani',
        },
        offer: 'read this conersational book by social media',
        discount: {
            percent: '20',
            price: '23'
        }
    }

    const [focus, setFocus] = useState({display: 'none'})

    const hover = () => {
        setFocus({display: 'block'})
    }
    const leave = () => {
        setFocus({display: 'none'})
    }

    const open = () => {
        console.log("opwn")
    }

    return(
        <Card key={book.id} style={{height: 'fit-content', margin: '5% 9%', overflow: 'hidden', cursor: 'pointer'}} onMouseOver={hover} onMouseLeave={leave}>
            <Card.Img src={Img}/>
            <Card.ImgOverlay style={focus}  onClick={() => openModal(book.id)}>
                <Row style={{color: 'white', background: 'linear-gradient(rgba(246, 2, 137, 0), rgba(246, 2, 137, 0.2), rgb(246, 2, 137, 1))'}}>
                    <Col>
                        <Card.Title style={{marginTop: '125%', marginBottom: '-10px'}}>{book.author.name}</Card.Title>
                    </Col>

                    <div style={{justifyContent: 'space-around'}}>
                        <DiscountRow color={{color: 'white'}} book={book} padding={'0'}/>
                    </div>
                </Row>
            </Card.ImgOverlay>
        </Card>
    )
}

export default BookCard;