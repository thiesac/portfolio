import React from 'react';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <a
            href={ project.link }
            target="_blank"
            rel="noopener noreferrer"
            style={ { textDecoration: 'none' } }
        >
            <Card className="project-card" id={ `card-${project.name}` }>
                <Card.Img
                    // style={{ width: '200px'}}
                    src={ project.image }
                    alt={ project.name }
                />
                <Card.Body>
                    <Card.Title>{ project.name }</Card.Title>
                    <Card.Text>
                        Technologies: { project.technologies }
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default ProjectCard;