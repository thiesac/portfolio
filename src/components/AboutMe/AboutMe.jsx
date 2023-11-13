import React from 'react';
import Image from 'react-bootstrap/Image';
import avatarImage from '../../images/avatar.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Image src={ avatarImage } alt="Avatar" fluid />
                    </Col>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed tristique metus nec ligula scelerisque, ac ullamcorper ligula tincidunt.
                            Integer a urna ut tellus malesuada vestibulum. Maecenas accumsan ex a metus rhoncus,
                            sit amet tincidunt eros auctor. Fusce euismod, nisl eget tincidunt dictum,
                            felis urna consectetur sem, a facilisis nunc libero sit amet nisl.
                            Etiam at velit ac tellus hendrerit semper vel vel felis. Suspendisse potenti.
                            Vivamus vitae ipsum id justo efficitur vestibulum.
                            Sed id nulla quis purus congue facilisis. In hac habitasse platea dictumst.
                            Curabitur elementum aliquam ante a convallis.
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default AboutMe;