import React from "react";
import './main.css'
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "../list-group";

const Bar = ({user, changeModule, handleShow}) => {

    const style = {

    }

    return (
        <Container className={'side-bar-box'} style={style}>
            <Card style={{padding: '5%', margin: '7% 2%', backgroundColor: 'unset', color: 'white', border: '2px solid white'}} onClick={handleShow}>
                <Card.Title>{user.firstname + " \n" + user.lastname}</Card.Title>
                <Card.Subtitle>{user.role}</Card.Subtitle>
            </Card>
            <Row className={'pages card-box'}>
                <ListGroup pages={user.pages} changeModule={changeModule}/>
            </Row>
            {/*<Row className='pages card'>*/}
            {/*    <ul className={'list'}>*/}
            {/*        {user.pages.map((page, index) =>*/}
            {/*            <li key={index}>*/}
            {/*                <button onClick={() => changeModule(page.toLowerCase())}>*/}
            {/*                    {page}*/}
            {/*                </button>*/}
            {/*            </li>*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*</Row>*/}
            <Row className='footer card-box'>
                <p>
                    aaa aaaa aaaa <br/> vdh hhhh ddddd
                </p>
            </Row>
        </Container>
    )
}

export default Bar;