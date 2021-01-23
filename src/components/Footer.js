import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <p>&copy; 2021 Chase Edwards</p>
                </div>
                <div>
                    <p>Feel free to check out my other links...</p>
                </div>
                <div className="socialLinks">
                    <a href="https://www.linkedin.com/in/chase-w-edwards/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x mr-1"></i></a>
                    <a href="https://github.com/cwedwards9" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x my-1"></i></a>
                    <a href="./assets/chase-w-edwards-resume.pdf" target="_blank" rel="noreferrer"><i className="fas fa-file-alt fa-2x ml-1"></i></a>
                </div>
            </footer>
        );
    }
}


export default Footer;