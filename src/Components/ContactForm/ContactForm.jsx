import { useState } from "react";
import {send} from 'emailjs-com';
import SubmitButton from "../SubmitButton/SubmitButton";
import "./ContactForm.scss";

const ContactForm = () => {

    const [message, setMessage] = useState({
        from_name:'',
        from_email:'',
        subject:'',
        message:''
    });
    const [submit, setSubmit] = useState("Submit");

    const handleInput = (e) => {

        switch(e.target.id) {
            case("from_name"):
                setMessage({...message, [e.target.id] : e.target.value});
                break;
            case("from_email"):
                setMessage({...message, [e.target.id] : e.target.value});
                break;
            case("subject"):
                setMessage({...message, [e.target.id] : e.target.value});
                break;
            case("message"):
                setMessage({...message, [e.target.id] : e.target.value});
                break;
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setSubmit("Loading");
        send(
            'service_pt5ej5p',
            'template_rk5youl',
            message,
            'JwW88Wb-5p-mC5ew9'
          )
            .then((response) => {
              setSubmit("Sent")
            })
            .catch((err) => {
              setSubmit("Error");
            });

    }

    return (
        <section className="form" id="contactMe">
            <h1 className="form__title">Get in touch</h1>
            <div className="contactForm">
                <div className="contactForm__name">
                    <p>Name</p>
                    <input id="from_name" onChange={handleInput}></input>
                </div>
                <div className="contactForm__email">
                    <p>Email</p>
                    <input id="from_email" onChange={handleInput}></input>
                </div>
                <div className="contactForm__subject">
                    <p>Subject</p>
                    <input id="subject" onChange={handleInput}></input>
                </div>
                <div className="contactForm__message">
                    <p>Message</p>
                    <textarea id="message" onChange={handleInput}></textarea>
                </div>
                <SubmitButton text={submit} handleSubmit={handleSubmit}/>
            </div>
        </section>
    )

}

export default ContactForm;