import "./Projects.scss";
import left from "../../Assets/Images/LeftArrow.svg";
import right from "../../Assets/Images/RightArrow.svg";
import chess from "../../Assets/Images/chess.svg";
import git from "../../Assets/Images/blue-git.svg";
import gitLive from "../../Assets/Images/gitLiveBlue.svg";
import html from "../../Assets/Images/html5.svg";
import css from "../../Assets/Images/css3.svg";
import javascript from "../../Assets/Images/javascript.svg";
import sass from "../../Assets/Images/sass.svg";

const Projects = () => {

return (

    <section className="projects">
        <div className="projects__nextPrevious">
            <img src={left} alt="previous project"></img>
            <img src={right} alt="next project"></img>
        </div>
        <div className="projects__preview">
            <img src={chess} alt="chess project preview"></img>
        </div>
        <div className="projects__links">
            <img src={git} alt="git repo link"></img>
            <img src={gitLive} alt="git pages link"></img>
        </div>
        <div className="projects__name">
            Chess
        </div>
        <div className="projects__description">
            A game in javascript to improve our knowledge of the DOM
        </div>
        <div className="projects__buildWith">
            BUILD WITH
        </div>
        <div className="projects__languages">
            <img src={javascript} alt="git repo link"></img>
            <img src={html} alt="git pages link"></img>
            <img src={css} alt="git repo link"></img>
            <img src={sass} alt="git pages link"></img>
        </div>
    </section>

    )

}

export default Projects