import React from 'react';
import projects from './ProjectsList';
import { Row } from 'react-bootstrap';
import ProjectCard from '../../components/Card/ProjectCard';
import Col from 'react-bootstrap/Col';


function Projects() {
    return (
        <div
            style={ {
                backgroundColor: '#EDC7B7',
                padding: '20px',
                minHeight: '80vh',
            } }
        >
            <Row className="g-4">
                <h3 style={ { color: '#1D1842' } } className="mb-4 text-center">
                    Check out some of my projects
                </h3>
                { projects.map((project, index) => (
                    <Col
                        key={ index }
                        xs={ 12 } // full width on extra-small screens
                        md={ 6 } // half width on medium screens
                        lg={ 4 } // one-third width on large screens
                    >
                        <ProjectCard project={ project } />
                    </Col>
                )) }
            </Row>

        </div>
    );
}

export default Projects;
