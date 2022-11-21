import "./MenuOption.scss";

const MenuOption = ({text, delay, startedUnmount, handleEndAnimation}) => {

    return (
        <>
            <div className={startedUnmount? "text text--out " : "text text--in"} style={{animationDelay:`${delay}s`}}>
                <p>{text}</p>
            </div>
            <div className={startedUnmount? "lineMenu line--out " : "lineMenu line--in"} style={{animationDelay:`${delay}s`}} onAnimationEnd={handleEndAnimation}></div>
        </>
    );

}

export default MenuOption;