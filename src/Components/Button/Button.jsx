import "./Button.scss";
import { useState} from "react";
import MenuOption from "../MenuOption/MenuOption";

const Button = ({text, onClick, options}) => {

    const [click, setClick] = useState(false);
    const [startUnmount, setStartUnmount] = useState(false);

    const handleClick = () => {
        if(click) {
            setStartUnmount(true)
        } else {
            setStartUnmount(false);
            setClick(!click);
            onClick();
        }
    }

    const handleUnmount = () => {
        if(click && startUnmount) {
            setClick(false);
        }
    }

    const menuOptions = options.map((option, index) => {
        const delay = (index+1)* 0.3;
        if(index != options.length-1) {
            return (
                <div className="menuOption" key={index*Math.random()}>
                    <MenuOption 
                        text={option} 
                        delay={delay}
                        startedUnmount={startUnmount}
                    />
                </div>
            )
        } else {
            return (
                <div className="menuOption" key={index*Math.random()}>
                    <MenuOption 
                        text={option} 
                        delay={delay}
                        startedUnmount={startUnmount}
                        handleEndAnimation={handleUnmount}
                    />
                </div>
            )
        }
        
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