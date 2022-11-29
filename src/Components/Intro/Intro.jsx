import "./Intro.scss";
import {React} from 'react';

const Intro = () => {

    return (

        <section className="intro">
            <div className="fadeIn">
                <p className="fadeIn__char one">C</p>
                <p className="fadeIn__char two">i</p>
                <p className="fadeIn__char three">a</p>
                <p className="fadeIn__char four">o</p>
                <p className="fadeIn__char five">,</p>
                <p className="fadeIn__char six">I</p>
                <p className="fadeIn__char seven">'</p>
                <p className="fadeIn__char eight">m</p>
                <p className="fadeIn__char nine"></p>
                <p className="fadeIn__name ten">A</p>
                <p className="fadeIn__name eleven">l</p>
                <p className="fadeIn__name twelve">e</p>
                <p className="fadeIn__name fourteen">x</p>
                <p className="fadeIn__char fifteen">,</p>
                <p className="fadeIn__char sixteen">a</p>
                <p className="fadeIn__char seventeen"></p>
                <p className="fadeIn__char eighteen">j</p>
                <p className="fadeIn__char nineteen">u</p>
                <p className="fadeIn__char twenty">n</p>
                <p className="fadeIn__char twentyOne">i</p>
                <p className="fadeIn__char twentyTwo">o</p>
                <p className="fadeIn__char twentyThree">r</p>
                <p className="fadeIn__char twentyFour"></p>
                <p className="fadeIn__char twentyFive">d</p>
                <p className="fadeIn__char twentySix">e</p>
                <p className="fadeIn__char twentySeven">v</p>
                <p className="fadeIn__char twentyEight">e</p>
                <p className="fadeIn__char twentyNine">l</p>
                <p className="fadeIn__char thirty">o</p>
                <p className="fadeIn__char thirtyOne">p</p>
                <p className="fadeIn__char thirtyTwo">e</p>
                <p className="fadeIn__char thirtyThree">r</p>
            </div>
            <section className="contactMe">
                <div className="cubes">
                    <div class="container">
                        <div class="cube" style={{animationDelay: "0s"}}>
                            <div class="face front"><h5 className="cube__letter">C</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube2 ">
                        <div class="cube" style={{animationDelay: "0.2s"}}>
                            <div class="face front"><h5 className="cube__letter">O</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube3">
                        <div class="cube" style={{animationDelay: "0.4s"}}>
                            <div class="face front"><h5 className="cube__letter">N</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube4">
                        <div class="cube" style={{animationDelay: "0.6s"}}>
                            <div class="face front"><h5 className="cube__letter">T</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube5">
                        <div class="cube" style={{animationDelay: "0.8s"}}>
                            <div class="face front"><h5 className="cube__letter">A</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube6">
                        <div class="cube" style={{animationDelay: "1s"}}>
                            <div class="face front"><h5 className="cube__letter">C</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube7">
                        <div class="cube" style={{animationDelay: "1.2s"}}>
                            <div class="face front"><h5 className="cube__letter">T</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                </div>
                <section className="cubes" style={{animationDelay: "1.4s"}}>
                    <div class="container cube8">
                        <div class="cube">
                            <div class="face front"><h5 className="cube__letter">M</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    <div class="container cube9">
                        <div class="cube" style={{animationDelay: "1.6s"}}>
                            <div class="face front"><h5 className="cube__letter">E</h5></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                </section>
            </section>
        </section>

    );

}

export default Intro;