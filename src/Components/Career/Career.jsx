import "./Career.scss";
import flow from "../../Assets/Images/Flow2.svg";

const Career = () => {

    return (

        <div className="resume">
            <section className="career">
                <img src={flow} alt="git flow" className="career__chart"></img>
                <div className="career__dates">
                    <p>'17-'21</p>
                    <p>'21-'22</p>
                    <p>'22-Present</p>    
                </div>
                <div className="career__resume">
                    <p>Resume here</p>
                </div>
            </section>
        </div>

    )

}

export default Career;