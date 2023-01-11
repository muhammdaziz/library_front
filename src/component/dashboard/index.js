import Container from "react-bootstrap/Container";
import SideBar from "./side-bar";
import {Col, Row} from "react-bootstrap";
import React, {useState} from "react";
import OffCanvasExample from "./off-canva";
import Home from "../main/home";
import NotFound from "../../pages/not-found";
import BookModule from "./modules/book";

const Dashboard = ({user}) => {

    const [show, setShow] = useState(false);

    const [currentModule, setCurrentModule] = useState('home');

    const [data, setData] = useState();

    const changeModule = (key, data) => {
        setCurrentModule(key);
        setData(data)
    }

    const modules = [
        {
            key: 'book',
            // src: <BookList edit={() => changeModule('book-edit')} create={() => changeModule('book-add')}/>
            src: <BookModule/>
        },
        {
            key: 'book-add',
            // src: <BookModal changeModule={() => changeModule('book')} creating={true}/>
        },
        {
            key: 'book-edit',
            // src: <BookModal changeModule={() => changeModule('book')} creating={false} book={data}/>
        },
        {
            key: 'book-a',
            // src: <View changeModule={() => changeModule('book')} creating={true}/>
        },
        {
            key: 'home',
            src: <Home/>
        }
    ];

    const switchModule = (condition) => {
        return modules
            .filter(m => m.key === condition)
            .map((module, index) => <div className={"dashboard-box"} key={index}>
                {module?.src}
            </div>)
    }

    return (
        <Container fluid style={{marginTop: '-1%'}}>
            <Row style={{padding: '0'}}>
                <Col sm={"auto"} style={{backgroundColor: 'rgba(36,41,47,0.94)', padding: '0.5% 0'}}>
                    <SideBar handleShow={() => setShow(true)} user={user} changeModule={changeModule}/>
                </Col>

                <Col>
                        {switchModule(currentModule)}
                </Col>
            </Row>

            <OffCanvasExample show={show} user={user} handleClose={() => setShow(false)}/>
        </Container>
    )
}

export default Dashboard;