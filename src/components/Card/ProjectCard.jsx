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
            <Card className="project-card">
                <Card.Img
                    className="card-img mx-auto"
                    src={ project.image }
                    alt={ project.name }
                />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{ project.name }</Card.Title>
                    <Card.Text className="card-text">
                        { project.technologies }
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default ProjectCard;
