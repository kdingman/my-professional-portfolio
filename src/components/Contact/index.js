import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section className="my-5">
            <h2>Contact Me</h2>

            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label><br></br>
                    <input type="text" name="name" defaultValue={name} placeholder="Regina Phalange" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br></br>
                    <input type="email" name="email" defaultValue={email} placeholder="rphalange@email.com" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type="submit" onSubmit={handleSubmit}>Submit</button>

            </form>
        </section>
    );
};

export default ContactForm;