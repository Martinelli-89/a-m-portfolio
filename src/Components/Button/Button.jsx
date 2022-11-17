import "./Button.scss";
import { useState} from "react";

const Button = ({text, onClick}) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
        onClick();
    }

    return (

        <div className="button">
            <div 
                className={click? "button__front button__click" : "button__front"} 
                onClick={handleClick}
                >{text.toUpperCase()}</div>
            <div className="button__back"></div>
        </div>

    )

}

export default Button;