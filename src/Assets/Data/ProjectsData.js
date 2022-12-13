import chess from "../Images/chess.svg";
import html from "../Images/html5.svg";
import css from "../Images/css3.svg";
import javascript from "../Images/javascript.svg";
import sass from "../Images/sass.svg";
import react from "../Images/React.svg";
import bem from "../Images/BEM.svg";
import java from "../Images/java.svg";
import sql from "../Images/SQL.svg";
import spring from "../Images/SpringBoot.svg"
import calculator from "../Images/calculator.svg";
import punk from "../Images/punk.svg";
import client from "../Images/ClientProject.png";
import calculatorVideo from "../Videos/calculator.mov";
import chessVideo from "../Videos/chess.mov";
import clientProject from "../Videos/ClientProject.mov";
import fullstack from "../Videos/Fullstack.mov";
import hangman from "../Videos/Hangman.mov";
import punkVideo from "../Videos/punkAPi.mov";
import snapVideo from "../Videos/Snap.mov";

const projectsInfo = [
    {projName: "Chess",
    link: "https://martinelli-89.github.io/ChessJS/",
    repo:"https://github.com/Martinelli-89/ChessJS",
    description: "A browser-based game using modern JavaScript programming techniques and DOM manipulation.",
    code: [javascript, html, css, sass, bem],
    imgSource: chess,
    video: chessVideo},
    {projName: "HACCP app",
    link: "",
    repo:"https://github.com/Martinelli-89/hospitality-app",
    description: "An API built following all modern design patterns, using Spring and React",
    code: [java, spring, sql, react, sass],
    imgSource: "",
    video: fullstack},
    {projName: "Synergy",
    link: "",
    repo:"",
    description: "A real-life MVP for a development project, delivered as a Scrum team to a client who will use it for future development.",
    code: [react, spring, sass, bem],
    imgSource: client,
    video: clientProject},
    {projName: "Snap",
    link: "",
    repo:"https://github.com/Martinelli-89/Snap-in-Java",
    description: "A Java Object Oriented game making use of multiple models and classes to run complex game logic from the command line.",
    code: [java],
    imgSource: "",
    video: snapVideo},
    {projName: "Hangman",
    link: "",
    repo:"https://github.com/Martinelli-89/Hangman-Java",
    description: "A Java Object Oriented game making use of multiple models and classes to run complex game logic from the command line while using a public API.",
    code: [java],
    imgSource: "",
    video: hangman},
    {projName: "Calculator",
    link: "https://martinelli-89.github.io/calculator/",
    repo:"https://github.com/Martinelli-89/calculator",
    description: "A browser-based calculator using modern JavaScript programming techniques and DOM manipulation.",
    code: [javascript, html, css, sass, bem],
    imgSource: calculator,
    video: calculatorVideo},
    {projName: "Punk API",
    link: "https://dainty-belekoy-a6cbcb.netlify.app/",
    repo: "https://github.com/Martinelli-89/punk-api",
    description: "A React application that pulls data from an external public API and presents it in a dashboard or multipage layout.",
    code: [react, html, css, sass, bem],
    imgSource: punk,
    video: punkVideo}
];

export default projectsInfo;