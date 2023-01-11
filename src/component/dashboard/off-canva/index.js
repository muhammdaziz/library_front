import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from "react-bootstrap/Card";
import IMG from "../../../assets/img/user-logo.jpeg";

function OffCanvasExample({user, show, handleClose, ...props }) {


    return (
        <>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{user?.firstname + " " + user?.lastname}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Card>
                        <Card.Img style={{borderRadius: '100%', width: '100%'}} src={IMG}/>
                        <Card.Body>
                            <Card.Text>
                                Some text as placeholder. In real life you can have the elements you
                                have chosen. Like, text, images, lists, etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default OffCanvasExample;