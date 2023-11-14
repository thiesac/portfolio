import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

function Header() {
    return (
        <>
            <Navbar className="navbar" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <ScrollLink to="projects" smooth={ true } duration={ 500 }>
                            Projects
                        </ScrollLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={ ScrollLink }
                            to="aboutme"
                            smooth={ true }
                            duration={ 500 }
                            activeClass="active-link"
                        >
                            About Me
                        </Nav.Link>
                        <Nav.Link
                            as={ ScrollLink }
                            to="contactme"
                            smooth={ true }
                            duration={ 500 }
                            activeClass="active-link"
                        >
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
