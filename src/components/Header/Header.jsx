import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar data-bs-theme="light" style={ { backgroundColor: '#EDC7B7' } }>
                <Container>
                    <Navbar.Brand href="/">About Me</Navbar.Brand>
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