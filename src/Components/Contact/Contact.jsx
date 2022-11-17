import "./Contact.scss";
import {React, useState} from 'react';

const Contact = () => {

    const [submit, isSubmitted] = useState(false);

    const flip = () => {
        isSubmitted(!submit);
    }

    return (

        <section className="mail">
            <div className={submit? "form is-sent" : "form"}>
                <div className="form__face form__face--front">
                    Enter details
                    <button onClick={()=>flip()}>Submit</button>
                </div>
                <div className="form__face form__face--back"></div>
            </div>
        </section>

    );

}

export default Contact;