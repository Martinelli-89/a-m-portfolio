import React, {useState} from "react";
import Card from "../ProjectCard/ProjectCard";
import ProjectDescription from "../ProjectDescription/ProjectDescription.jsx";

import "./Projects.scss";

const Projects = ({data}) => {

    const [keyLastCardFlipped, toggleKeyLastCardFlipped] = useState();

    const updateFlipCard = (value) => {
        toggleKeyLastCardFlipped(value);
    }

    const baseURL = "/Images/";

    return (
            <section className="projects">
                <div className="projects__wrapper">
                    {data.map ( (project, index) => {
                        if(project.name != "Easter egg") {
                            return (
                                <Card project={project.projName} 
                                        imgSource={baseURL + project.imgSource} 
                                        key = {index}
                                        cardId = {index}
                                        keyLastCardFlipped={keyLastCardFlipped}
                                        toggleKeyLastCardFlipped={updateFlipCard}/>
                            );
                            } else {
                                return (
                                    <Card project={project.projName} 
                                            imgSource={baseURL + project.imgSource} 
                                            key = {index}
                                            cardId = {index}
                                            keyLastCardFlipped={keyLastCardFlipped}
                                            toggleKeyLastCardFlipped={toggleKeyLastCardFlipped}/>
                                );
                            }
                    })
                    }
                </div>
                <ProjectDescription active={keyLastCardFlipped} data={data}/>
            </section>
    );
}

export default Projects;