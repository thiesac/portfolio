import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../Projects/Projects';
import Banner from '../Banner/Banner';


function Home() {
    return (
        <>
            <Header />
            <Banner />
            <section id="projects">
                <Projects />
            </section>
            {/* <AboutMe /> */}
        </>
    )
}

export default Home;