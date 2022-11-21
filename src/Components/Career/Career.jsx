import "./Career.scss";
import flow from "../../Assets/Images/Flow2.svg";
import career from "../../Assets/Data/CareerData";
import { useState } from "react";

const Career = () => {

    const [venue, setVenue] = useState(career.Arnolfini.Venue);
    const [role, setRole] = useState(career.Arnolfini.Role);
    const [recap, setRecap] = useState(career.Arnolfini.Text);

    const ArnolfiniClick = () => {
        setVenue(career.Arnolfini.Venue);
        setRole(career.Arnolfini.Role);
        setRecap(career.Arnolfini.Text);
    }

    const ArchitectClick = () => {
        setVenue(career.Architect.Venue);
        setRole(career.Architect.Role);
        setRecap(career.Architect.Text);
    }

    const GambasClick = () => {
        setVenue(career.Gambas.Venue);
        setRole(career.Gambas.Role);
        setRecap(career.Gambas.Text);
        console.log("fire");
    }

    return (

        <div className="resume">
            <section className="career">
                <img src={flow} alt="git flow" className="career__chart"></img>
                <div className="career__dates">
                    <p onClick={ArnolfiniClick}>'17-'21</p>
                    <p onClick={ArchitectClick}>'21-'22</p>
                    <p onClick={GambasClick}>'22-Present</p>    
                </div>
                <div className="career__resume resume">
                    <h5 className="resume__venue">{venue}</h5>
                    <p className="resume__role">{role}</p>
                    <p className="resume__text">{recap}</p>
                </div>
            </section>
        </div>

    )

}

export default Career;