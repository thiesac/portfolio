import React from 'react';
import projects from './ProjectsList';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

function Projects() {
    return (
        <div
            style={ {
                backgroundColor: '#1D1842',
                padding: '20px',
                minHeight: '80vh',
            } }
        >
            <h3
                style={ { color: '#EDC7B7' }}
                className="text-center mb-4"
            >
                Check out some of my projects
            </h3>
            <Row xs={ 1 } md={ 4 } className="g-4" >
                { projects.map((project, index) => (
                    <Link
                        key={ index } to={ project.link }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card >
                            <Card.Img />
                            <Card.Body>
                                <Card.Title>{ project.name }</Card.Title>
                                <Card.Text>
                                    Technologies: { project.technologies }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                )) }
            </Row>
        </div>
    );
}

export default Projects;
