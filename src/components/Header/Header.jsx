import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Linkedin, Github } from 'react-bootstrap-icons';
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
                            className="custom-link"
                        >
                            About Me
                        </Nav.Link>
                        <Navbar.Brand
                            href="https://www.linkedin.com/in/thiesa-cesco/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </Navbar.Brand>
                        <Navbar.Brand
                            href="https://github.com/thiesac/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github />
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
