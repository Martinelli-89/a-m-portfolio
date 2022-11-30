import {React, useState} from 'react';
import logo from "../../Assets/Images/Logo.svg";
import Button from "../Button/Button";
import "./Nav.scss";

const Nav = () => {

    return (

        <section className='mainPage__nav'>
            <section className="nav">
                <img src={logo} alt="logo" className='nav__logo'></img>
                <div className='nav__buttons'>
                    <Button 
                        text={"menu"} 
                        options={["Projects", "About me", "Get in touch"]} 
                        links={["#projects", "#aboutMe", "#contactMe"]}
                     />
                </div>
            </section>
        </section>

    );

}

export default Nav;