import {React, useState} from 'react';

import "./MainDisplay.scss";

import Logo from "../Logo/Logo.jsx";

const MainDisplay = ({aboutMe, projects, contacts}) => {

    let render;

    if(aboutMe==false && projects==false && contacts==false) {
        render = <Logo />;
    }

    if(aboutMe == true) {
        render = <p>About me</p>
    }

    if(projects == true) {
        render = <p>Projects</p>
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