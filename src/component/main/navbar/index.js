import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../assets/img/logo.png';
import './main.css';
import Overlay from "../overlay";

function NavBar({user}) {
    return (
        <>
            <Navbar style={{padding: '0.5% 20px'}} key={'sm'} bg="dark" variant={'dark'} expand={'sm'} className="mb-3">
                <Container fluid className={'nav-bar'}>
                    <Navbar.Brand href="/" className={'navbar-logo'}>
                        <img src={Logo} alt={'logo'}/>
                        <h3>Library</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Library
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="promotions">Promotions</Nav.Link>
                                <Nav.Link href="shop">Shop</Nav.Link>
                                <Nav.Link href="pages">Pages</Nav.Link>
                                <Nav.Link href="about-us">About us</Nav.Link>
                                <Nav.Link href="contact-us">Contact us</Nav.Link>
                                {user.dashboard ? <Nav.Link href="dashboard">user?.dashboard</Nav.Link> : ''}
                            </Nav>
                            <Overlay user={user}/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;