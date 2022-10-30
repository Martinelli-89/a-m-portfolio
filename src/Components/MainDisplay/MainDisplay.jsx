import {React, useState} from 'react';

import "./MainDisplay.scss";

import Logo from "../Logo/Logo.jsx";
import AboutMe from '../AboutMe/AboutMe.jsx';
import Projects from "../Projects/Projects.jsx";

const MainDisplay = ({aboutMe, projects, contacts, data}) => {

    let render;

    if(aboutMe==false && projects==false && contacts==false) {
        render =<> 
                <Logo />
                <h2>Junior Software Developer</h2>
                </>
    }

    if(aboutMe == true) {
        render = <AboutMe />;
    }

    if(projects == true) {
        render = <Projects data={data} />
    }

    if(contacts == true) {
        render = <p>Contacts</p>
    }

    return (

        <>
            {render}
        </>

    );

}

export default MainDisplay;
