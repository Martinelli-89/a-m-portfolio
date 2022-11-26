import "./Projects.scss";
import left from "../../Assets/Images/LeftArrow.svg";
import right from "../../Assets/Images/RightArrow.svg";
import git from "../../Assets/Images/blue-git.svg";
import gitLiveImg from "../../Assets/Images/gitLiveBlue.svg";

const Projects = ({gitRepo, gitLive, img, name, intro, languages, updateProject}) => {

return (

    <section className="projects">
        <div className="projects__nextPrevious">
            <img src={left} alt="previous project" id="previous" onClick={updateProject}></img>
            <img src={right} alt="next project" id="next" onClick={updateProject}></img>
        </div>
        <div className="projects__preview">
            <img src={img} alt="chess project preview"></img>
        </div>
        <div className="projects__links">
            <a href={gitRepo} target="_blank">
            <img src={git} alt="git repo link"></img>
            </a>
            <a href={gitLive} target="_blank">
                <img src={gitLiveImg} alt="git pages link"></img>
            </a>
        </div>
        <div className="projects__name">
            {name}
        </div>
        <div className="projects__description">
            {intro}
        </div>
        <div className="projects__buildWith">
            BUILT WITH
        </div>
        <div className="projects__languages">
            {languages.map( (language, index) => {
                return <img src={language} key={(Math.round(Math.random()*67))/Math.random()}></img>
            })}
        </div>
    </section>

    )

}

export default Projects