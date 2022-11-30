import "./SubmitButton.scss";


const SubmitButton = ({text, handleSubmit}) => {

    return (
        <div className={text.toLowerCase()} onClick={handleSubmit}>
            {text}
        </div>
    );

}

export default SubmitButton;