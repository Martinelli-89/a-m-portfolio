import {React, useState} from 'react';
import "./SideNav.scss";
import gitBlue from '../../Assets/Images/blue-git.svg';
import cvBlue from '../../Assets/Images/blue-cv.svg';
import linkedinBlue from '../../Assets/Images/blue-linkedin.svg';
import gitRed from '../../Assets/Images/red-git.svg';
import cvRed from '../../Assets/Images/red-cv.svg';
import linkedinRed from '../../Assets/Images/red-linkedin.svg';

const SideNav = () => {

    const [git, setGit] = useState(false);
    const [cv, setCv] = useState(false);
    const [linkedin, setLinkedin] = useState(false);

    const handleMouseOverGit = () => {
        setGit(!git);
    }

    const handleMouseLeaveGit = () => {
        setGit(!git);
        }

    const handleMouseOverCv = () => {
        setCv(!cv);
    }

    const handleMouseLeaveCv = () => {
        setCv(!cv);
        }

    const handleMouseOverLinkedin = () => {
        setLinkedin(!linkedin);
    }

    const handleMouseLeaveLinkedin = () => {
        setLinkedin(!linkedin);
        }

    return (
        <section className="mainPage__sideNav">
            <nav className="sideNav">
                <a href="https://github.com/Martinelli-89" target="_blank">
                    <img 
                        src={git? gitRed : gitBlue} 
                        alt="github logo" 
                        className="sideNav__logo"
                        onMouseEnter={handleMouseOverGit} onMouseLeave={handleMouseLeaveGit}></img>
                </a>
                <a href="https://www.linkedin.com/in/alex-martinelli-776b94258/" target="_blank">
                    <img src={linkedin? linkedinRed : linkedinBlue} alt="linkedin logo" className="sideNav__logo"
                    onMouseEnter={handleMouseOverLinkedin} onMouseLeave={handleMouseLeaveLinkedin}></img>
                </a>
                <a href="https://github.com/Martinelli-89" target="_blank">
                    <img src={cv? cvRed : cvBlue} alt="cv logo" className="sideNav__logo"
                    onMouseEnter={handleMouseOverCv} onMouseLeave={handleMouseLeaveCv}></img>
                </a>
                <div>
                    <div className="sideNav__verticalLine"></div>
                </div>
            </nav>
        </section>
    )

}

export default SideNav;