import "./MenuOption.scss";

const MenuOption = ({text, delay, startedUnmount, handleEndAnimation, link}) => {

    console.log(link)
    return (
        <>
            <a href={ link? `${link}` : "#contactMe"}>
                <div className={startedUnmount? "text text--out " : "text text--in"} style={{animationDelay:`${delay}s`}}>
                    <p>{text}</p>
                </div>
                <div className={startedUnmount? "lineMenu line--out " : "lineMenu line--in"} style={{animationDelay:`${delay}s`}} onAnimationEnd={handleEndAnimation}></div>
            </a>
        </>
    );

}

export default MenuOption;