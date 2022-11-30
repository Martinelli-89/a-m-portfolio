import "./SubmitButton.scss";


const SubmitButton = ({text, handleSubmit}) => {

    return (
        <div className={`${text.toLowerCase()} submitStand`} onClick={handleSubmit}>
            {text}
        </div>
    );

}

export default SubmitButton;