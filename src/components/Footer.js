import React from "react";
import pdf from "../assets/chase-edwards-resume.pdf";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>&copy; { year } Chase Edwards</p>
            </div>
            <div>
                <p>Feel free to check out my other links...</p>
            </div>
            <div className="socialLinks">
                <a href="https://www.linkedin.com/in/chase-w-edwards/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x mr-2"></i></a>
                <a href="https://github.com/cwedwards9" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x my-1"></i></a>
                <a href={pdf} target="_blank" rel="noreferrer"><i className="fas fa-file-alt fa-2x ml-2"></i></a>
            </div>
        </footer>
    );
}