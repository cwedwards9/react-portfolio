import React, {Component} from "react";
import pdf from "../assets/chase-w-edwards-resume.pdf";
import "./Banner.css";

class Banner extends Component {
    render() {
        return (
            <header className="hero">
                <div className="background-image"></div>
                <div className="hero-content-area">
                    <h1>Hello! I'm Chase.</h1>
                    <h3>Full-Stack Web Developer</h3>
                    <a href={pdf} target="_blank" rel="noreferrer">View My Resume</a>
                </div>
            </header>
        );
    }
}


export default Banner;