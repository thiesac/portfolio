import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../Projects/Projects';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../../components/Footer/Footer';


function Home() {
    return (
        <>
            <Header />
            <Banner />
            <section id="projects">
                <Projects />
            </section>
            <section id="aboutme">
                <AboutMe />
            </section>
            <Footer />
        </>
    )
}

export default Home;