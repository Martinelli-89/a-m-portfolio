import Intro from "../Intro/Intro";
import Career from "../Career/Career";
import Projects from "../Projects/Projects";

import "./MainContent.scss";

const MainContent = () => {

    return (
        <div className="mainContent">
            <Intro />
            <Career />
            <Projects />
        </div>

    )

}

export default MainContent;
