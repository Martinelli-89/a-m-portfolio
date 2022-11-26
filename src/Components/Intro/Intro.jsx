import "./Intro.scss";
import {React} from 'react';

const Intro = () => {

    return (

        <section className="intro">
            <div className="fadeIn">
                <span className="fadeIn__char">C</span>
                <span className="fadeIn__char">i</span>
                <span className="fadeIn__char">a</span>
                <span className="fadeIn__char">o</span>
                <span className="fadeIn__char">,</span>
                <br></br>
                <span className="fadeIn__char">I</span>
                <span className="fadeIn__char">'</span>
                <span className="fadeIn__char">m</span>
                <span className="fadeIn__char">&nbsp;</span>
                <span className="fadeIn__name">A</span>
                <span className="fadeIn__name">l</span>
                <span className="fadeIn__name">e</span>
                <span className="fadeIn__name">x</span>
                <span className="fadeIn__char">,</span>
                <br></br>
                <span className="fadeIn__char">a</span>
                <span className="fadeIn__char">&nbsp;</span>
                <span className="fadeIn__char">j</span>
                <span className="fadeIn__char">u</span>
                <span className="fadeIn__char">n</span>
                <span className="fadeIn__char">i</span>
                <span className="fadeIn__char">o</span>
                <span className="fadeIn__char">r</span>
                <span className="fadeIn__char">&nbsp;</span>
                <span className="fadeIn__char">d</span>
                <span className="fadeIn__char">e</span>
                <span className="fadeIn__char">v</span>
                <span className="fadeIn__char">e</span>
                <span className="fadeIn__char">l</span>
                <span className="fadeIn__char">o</span>
                <span className="fadeIn__char">p</span>
                <span className="fadeIn__char">e</span>
                <span className="fadeIn__char">r</span>
            </div>
            <div class="container">
                <div class="cube">
                    <div class="face front"></div>
                    <div class="face back"></div>
                    <div class="face right"></div>
                    <div class="face left"></div>
                    <div class="face top"></div>
                    <div class="face bottom"></div>
                </div>
            </div>
        </section>

    );

}

export default Intro;