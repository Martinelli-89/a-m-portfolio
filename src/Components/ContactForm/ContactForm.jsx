import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleInput = (e) => {

        switch(e.target.id) {
            case("name"):
                setName(e.target.value);
                break;
            case("email"):
                setEmail(e.target.value);
                break;
            case("subject"):
                setSubject(e.target.value);
                break;
            case("message"):
                setMessage(e.target.value);
                break;
        }

    }

    return (

        <section className="form">
            <div className="contactForm">
                <div className="contactForm__name">
                    <p>Name</p>
                    <input id="name" onChange={handleInput}></input>
                </div>
                <div className="contactForm__email">
                    <p>Email</p>
                    <input id="email" onChange={handleInput}></input>
                </div>
                <div className="contactForm__subject">
                    <p>Subject</p>
                    <input id="subject" onChange={handleInput}></input>
                </div>
                <div className="contactForm__message">
                    <p>Message</p>
                    <textarea id="message" onChange={handleInput}></textarea>
                </div>
                <div className="contactForm__send">Send</div>
            </div>
        </section>

    )

}

export default ContactForm;