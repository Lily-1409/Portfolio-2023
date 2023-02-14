import './app.css';
import Header from "../layout/header/Header";
import Main from "../blocks/main/Main"
import React from 'react';
import About from '../blocks/about/About';
import Skills from 'components/blocks/skills/Skills';
import Projects from 'components/blocks/projects/Projects';
import Footer from 'components/layout/footer/Footer';

function App () {
    return (
        <>
        <Header />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Footer />
        </>
    )
}

export default App;