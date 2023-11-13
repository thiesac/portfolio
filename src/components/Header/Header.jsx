import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar style={ { backgroundColor: '#00ACC1' } }>
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contactme">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;