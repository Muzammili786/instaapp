import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsMessenger } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Instagram <span className='arro'><FaAngleDown /></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            <BsMessenger size="2rem" color="white" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;