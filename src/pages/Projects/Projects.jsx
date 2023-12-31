import React from 'react';
import projects from './ProjectsList';
import { Row } from 'react-bootstrap';
import ProjectCard from '../../components/Card/ProjectCard';
import Col from 'react-bootstrap/Col';
import './Projects.css';


function Projects() {
    return (
        <div className="projects-container">
            <Row className="g-4 mx-md-auto">
                <h2 style={ { color: '#1D1842' } } className="projects-header my-5 text-center">
                    Check out some of my projects
                </h2>
                { projects.map((project, index) => (
                    <Col
                        key={ index }
                        xs={ 12 } // full width on extra-small screens
                        md={ 6 }  // half width on medium screens
                        lg={ 2 }  // one-third width on large screens
                    >
                        <ProjectCard project={ project } />
                    </Col>
                )) }
            </Row>
        </div>
    );
}



export default Projects;
