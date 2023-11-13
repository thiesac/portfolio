import React from 'react';
import Header from '../../components/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';


function Home() {
    return (
        <>
            <Header />
            <AboutMe />
            <Projects />
        </>
    )
}

export default Home;