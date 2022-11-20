import "./MenuOption.scss";

const MenuOption = ({text, delay}) => {

    return (
            <div className="text" style={{animationDelay:`${delay}s`}}>
                <p>{text}</p>
            </div>
    );

}

export default MenuOption;