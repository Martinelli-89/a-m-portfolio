import "./SubmitButton.scss";


const SubmitButton = ({text, handleSubmit}) => {

    return (

        <div className={text.toLowerCase()}>
            {text}
        </div>

    );

}

export default SubmitButton;