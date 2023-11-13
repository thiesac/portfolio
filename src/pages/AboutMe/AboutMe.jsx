import React from 'react';
import Image from 'react-bootstrap/Image';
import avatarImage from '../../images/avatar.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
    return (
        <>
            <Container
                style={ { backgroundColor: '#AC3B61' } }
                fluid
            >
                <Row>
                    <Col>
                        <Image
                            src={ avatarImage } alt="Avatar"
                        />
                    </Col>
                    <Col className="d-flex align-items-center">
                        <h1 style={ { color: '#EEE2DC', fontSize: '5em' } }>
                            Hi, my name is Thiesa<br />
                            I'm your web developer
                        </h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMe;