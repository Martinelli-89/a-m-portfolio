import chess from "../Images/chess.svg";
import html from "../Images/html5.svg";
import css from "../Images/css3.svg";
import javascript from "../Images/javascript.svg";
import sass from "../Images/sass.svg";
import react from "../Images/React.svg";
import bem from "../Images/BEM.svg";
import java from "../Images/java.svg";
import spring from "../Images/SpringBoot.svg"
import calculator from "../Images/calculator.svg";
import punk from "../Images/punk.svg";

const projectsInfo = [
    {projName: "Chess",
    link: "https://martinelli-89.github.io/ChessJS/",
    repo:"https://github.com/Martinelli-89/ChessJS",
    description: "A browser-based game using modern JavaScript programming techniques and DOM manipulation.",
    code: [javascript, html, css, sass, bem],
    imgSource: chess},
    {projName: "Calculator",
    link: "https://martinelli-89.github.io/calculator/",
    repo:"https://github.com/Martinelli-89/calculator",
    description: "A browser-based calculator using modern JavaScript programming techniques and DOM manipulation.",
    code: [javascript, html, css, sass, bem],
    imgSource: calculator},
    {projName: "Punk API",
    link: "https://dainty-belekoy-a6cbcb.netlify.app/",
    repo: "https://github.com/Martinelli-89/punk-api",
    description: "A React application that pulls data from an external public API and presents it in a dashboard or multipage layout.",
    code: [react, html, css, sass, bem],
    imgSource: punk}
];

export default projectsInfo;