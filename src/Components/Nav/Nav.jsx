import {React} from 'react';
import Button from "../Button/Button";
import "./Nav.scss";
import logo from "../../Assets/Images/Logo.svg";

const Nav = () => {

    return (
        <section className='mainPage__nav'>
            <section className="nav">
                <a href="#landing">
                    <img src={logo} alt="logo" className='nav__logo' />
                </a>
                <div className='nav__buttons'>
                    <Button 
                        text={"menu"} 
                        options={["Projects", "About me", "Get in touch"]} 
                        links={["#projects", "#aboutMe", "#contactMe"]}
                     />
                </div>
            </section>
        </section>
    )

}

export default Nav;