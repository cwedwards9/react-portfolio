import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import "./Contact.css";

export default function Contact() {
    const [name, updateName, resetName] = useInputState("");
    const [email, updateEmail, resetEmail] = useInputState("");
    const [message, updateMessage, resetMessage] = useInputState("");
    const [status, setStatus] = useState("");
        
    // Script to send to Formspree endpoint
    function handleSubmit(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS");
          } else {
            setStatus("ERROR");
          }
        };
        xhr.send(data);

        resetName();
        resetEmail();
        resetMessage();
        setStatus("");
    }
    
    return (
        <div className="contact-card">
            <div className="contact-info">
                <h1 className="contact-info-head">Contact</h1>
                <ul className="contact-list">
                    <li><i className="fas fa-phone-square-alt contact-icon"></i> 330-815-3079</li>
                    <li><i className="far fa-envelope contact-icon"></i> chase.w.edwards9@gmail.com</li>
                    <li>Or send me a message here <i className="fas fa-arrow-right contact-icon"></i><i className="fas fa-arrow-down contact-icon"></i></li>
                </ul>
                <div className="contact-socials">
                    <a href="https://www.linkedin.com/in/chase-w-edwards/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x mr-3"></i></a>
                    <a href="https://github.com/cwedwards9" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
                </div>
            </div>

            <form action="https://formspree.io/f/xgepdlvq" method="POST" onSubmit={handleSubmit}>
                <h1>Get In Touch</h1>
                <div className="form-input">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} name="name" onChange={updateName} required />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} name="email" onChange={updateEmail} required />
                </div>
                <div className="form-input">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="4" value={message} name="message" onChange={updateMessage} required>
                    </textarea>
                </div>
                <div id="btnDiv">
                {status === "SUCCESS" ? <p>Message Sent Sucessfully!</p> : <button id="btnContact" type="submit">Let's Talk</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </div>
            </form>
        </div>
    );
}