import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IMG from "../../../assets/img/Screenshot 2022-12-21 at 0.03.19.png";
import './main.css'
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Discount from "../discount-row";

function Example({book, show, handleClose}) {


    return (
        <>
            <Modal style={{zIndex: '999999'}}
                   size={"xl"}
                   show={show}
                   centered
                   onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{}}>
                    <Row>
                        <Col>
                            <Card.Img src={IMG}/>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col xl={3}>
                                                Price:
                                            </Col>
                                            <Col>
                                                {book?.discount ? <Discount book={book} marginTop={'0'}/> : book.price}
                                            </Col>
                                        </Row>
                                    </Card.Title>
                                    <Card.Title>
                                        Language: {book.language}
                                    </Card.Title>
                                    <br/>
                                    <Card.Title>
                                        Content:
                                    </Card.Title>
                                    <Card.Header>
                                        {book.content}
                                    </Card.Header>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{textAlign: 'center'}}>
                                <Card.Title>
                                    {book?.author?.name}
                                </Card.Title>
                                <Row>
                                    <Col xl={3}></Col>
                                    <Col>
                                        <Card.Img src={IMG}/>
                                    </Col>
                                    <Col xl={3}></Col>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button as={"a"} download variant="primary">
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;