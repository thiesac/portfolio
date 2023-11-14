import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar data-bs-theme="dark" style={ { backgroundColor: '#1D1842' } }>
                <Container>
                    <Navbar.Brand href="/">Projects</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#contactme">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;