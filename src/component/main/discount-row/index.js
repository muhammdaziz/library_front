import React from "react";
import Card from "react-bootstrap/Card";
import {Badge, Row} from "react-bootstrap";
import './main.css'

const DiscountRow = ({book, color, padding, marginTop}) => {

    return(
        <Row sm={3} style={{padding: padding, marginTop: marginTop, fontSize: '105%',}}>
            {book.discount ?
                <>
                    <Card.Text style={color? color : {color: '#43b22a'}}>
                        {book.discount.price} $
                    </Card.Text>
                    <Card.Text style={color? color : {}} className={'discount'}>
                        {book.price} $
                    </Card.Text>
                    <Badge bg={color? "secondary" : "danger"}
                           style={{fontSize: '80%', height: 'fit-content', width: 'fit-content'}}
                    >
                        {book.discount.percent} %
                    </Badge>
                </>
                :
                <Card.Text>
                    {book.price} $
                </Card.Text>
            }
        </Row>
    )
}

export default DiscountRow;