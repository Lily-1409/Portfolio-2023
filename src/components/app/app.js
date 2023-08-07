import './app.css';
import Header from "../layout/header/Header";
import Intro from "../blocks/intro/Intro"
import React from 'react';
import About from '../blocks/about/About';
import Skills from 'components/blocks/skills/Skills';
import Projects from 'components/blocks/projects/Projects';
import Footer from 'components/layout/footer/Footer';
import Contacts from 'components/blocks/contacts/Contacts';
import SearchMe from 'components/blocks/searchMe/searchMe';
import ButtonScrollUp from 'components/common/buttonScrollUp/ButtonScrollUp';

function App () {

    return (
        <>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <SearchMe />
        <Footer />
        <ButtonScrollUp />
        </>
    )
}

export default App;