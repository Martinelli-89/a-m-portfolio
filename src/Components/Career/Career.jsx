import { useState } from "react";
import "./Career.scss";
import career from "../../Assets/Data/CareerData";
import flow from "../../Assets/Images/Flow2.svg";

const Career = () => {

    const [venue, setVenue] = useState(career.Arnolfini.Venue);
    const [role, setRole] = useState(career.Arnolfini.Role);
    const [recap, setRecap] = useState(career.Arnolfini.Text);
    const [arnolfini, setArnolfini] = useState(true);
    const [architect, setArchitect] = useState(false);
    const [gambas, setGambas] = useState(false);

    const ArnolfiniClick = () => {
        setVenue(career.Arnolfini.Venue);
        setRole(career.Arnolfini.Role);
        setRecap(career.Arnolfini.Text);
        setArnolfini(true);
        setGambas(false);
        setArchitect(false);
    }

    const ArchitectClick = () => {
        setVenue(career.Architect.Venue);
        setRole(career.Architect.Role);
        setRecap(career.Architect.Text);
        setArnolfini(false);
        setGambas(false);
        setArchitect(true);
    }

    const GambasClick = () => {
        setVenue(career.Gambas.Venue);
        setRole(career.Gambas.Role);
        setRecap(career.Gambas.Text);
        setArnolfini(false);
        setGambas(true);
        setArchitect(false);
    }

    return (
        <div className="resume" id="aboutMe">
            <h1 className="resume__title">About me</h1>
            <div className="education">
                <p className="education__title">Education</p>
                <br></br>
                <p className="education__degree">BA in Philosophy</p>
                <p className="education__degree">GCSE in Computer Science</p>
            </div>
            <section className="career">
                <img src={flow} alt="git flow" className="career__chart"></img>
                <div className="career__dates">
                    <p className={arnolfini? "selected" : ""} onClick={ArnolfiniClick}>'17-'21</p>
                    <p className={architect? "selected" : ""} onClick={ArchitectClick}>'21-'22</p>
                    <p className={gambas? "selected" : ""} onClick={GambasClick}>'22-Present</p>    
                </div>
                <div className="career__resume cv">
                    <h5 className="cv__venue">{venue}</h5>
                    <p className="cv__role">{role}</p>
                    <p className="cv__text">{recap}</p>
                </div>
            </section>
        </div>
    )

}

export default Career;