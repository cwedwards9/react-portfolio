import React, {Component} from "react";
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", status: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    
    // Script to send to Formspree endpoint
    handleSubmit(ev) {
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
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);

        this.setState({name: "", email: "", message: "", status: ""});
    }
    

    render() {
        const { name, email, message, status } = this.state;
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

                <form action="https://formspree.io/f/xgepdlvq" method="POST" onSubmit={this.handleSubmit}>
                    <h1>Get In Touch</h1>
                    <div className="form-input">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name}
                            name="name"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            name="email"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message" 
                            rows="4"
                            value={message}
                            name="message"
                            onChange={this.handleChange}
                            required
                        >
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
}

export default Contact;