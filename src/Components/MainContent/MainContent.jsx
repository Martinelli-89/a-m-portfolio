import { useState } from "react";
import Intro from "../Intro/Intro";
import Career from "../Career/Career";
import Projects from "../Projects/Projects";
import projectsData from "../../Assets/Data/ProjectsData";
import ContactForm from "../ContactForm/ContactForm";
import "./MainContent.scss";

const MainContent = () => {

    const [projectToDisplay, setProjectToDisplay] = useState(0);

    const updateProject = (e) => {
        if(e.target.id == "previous") {
            if(projectToDisplay == 0) {
                setProjectToDisplay(projectsData.length-1);
            } else {
                setProjectToDisplay(projectToDisplay-1);
            }      
        } else {
            if(projectToDisplay == projectsData.length-1) {
                setProjectToDisplay(0);
            } else {
                setProjectToDisplay(projectToDisplay+1);
            } 
        }
    }

    return (
        <section className="mainPage__intro">
            <div className="mainContent">
                <Intro />
                <Projects 
                    gitRepo={projectsData[projectToDisplay].repo}
                    gitLive={projectsData[projectToDisplay].link}
                    video={projectsData[projectToDisplay].video}
                    name={projectsData[projectToDisplay].projName}
                    intro={projectsData[projectToDisplay].description}
                    languages={projectsData[projectToDisplay].code}
                    updateProject={updateProject}
                    />
                <Career />
                <ContactForm />
            </div>
        </section>
    )

}

export default MainContent;
