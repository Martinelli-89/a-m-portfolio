import "./ContactForm.scss";

const ContactForm = () => {

    return (

        <section className="form">
            <div className="contactForm">
                <div className="contactForm__name">
                    <p>Name</p>
                    <input></input>
                </div>
                <div className="contactForm__email">
                    <p>Email</p>
                    <input></input>
                </div>
                <div className="contactForm__subject">
                    <p>Subject</p>
                    <input></input>
                </div>
                <div className="contactForm__message">
                    <p>Message</p>
                    <textarea></textarea>
                </div>
                <div className="contactForm__send">Send</div>
            </div>
        </section>

    )

}

export default ContactForm;