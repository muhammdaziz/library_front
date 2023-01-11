import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";


const BookModule = () => {

    return(
        <Container fluid style={{padding: '1%'}}>
            <Row style={{borderBottom: '3px solid #464545'}}>
                <Card.Title style={{fontWeight: '800', margin: '1% 0 0.5%'}}>BOOK</Card.Title>
            </Row>

            <Row>

            </Row>
        </Container>
    )
}

export default BookModule;