import "./Button.scss";
import { useState} from "react";
import MenuOption from "../MenuOption/MenuOption";

const Button = ({text, onClick, options}) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        onClick();
    }

    const menuOptions = options.map((option, index) => {
        const delay = (index+1)* 0.3;
        return (
            <div className="menuOption" key={index*Math.random()}>
                <MenuOption text={option} animate={click} delay={delay}/>
                <div className={"menuOption__line"} style={{animationDelay:`${delay}s`}}></div>
            </div>
        )
    })

    return (
        <div className="menu">
            <div className="button">
                <div 
                    className={click? "button__front button__click" : "button__front"} 
                    onClick={handleClick}
                    >{text.toUpperCase()}</div>
                <div className="button__back"></div>
            </div>
            <div className="options">
                {click && <>{menuOptions}</> }
            </div>
        </div>

    )

}

export default Button;