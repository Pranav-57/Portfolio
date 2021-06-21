import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const Main = () => {
    return (
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
        </main>
    )
}

export default Main;