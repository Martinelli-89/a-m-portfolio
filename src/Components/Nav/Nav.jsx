import {React, useState} from 'react';
import logo from "../../Assets/Images/Logo.svg";
import Button from "../Button/Button";
import "./Nav.scss";

const Nav = () => {

    return (

        <section className="nav">
            <img src={logo} alt="logo" className='nav__logo'></img>
            <div className='nav__buttons'>
                <Button text={"menu"} options={["PROJECTS", "ABOUT ME", "WRITE ME"]} onClick={()=> console.log("hello")} />
            </div>
        </section>

    );

}

export default Nav;