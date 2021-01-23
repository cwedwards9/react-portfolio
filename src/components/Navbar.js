import React, {Component} from "react";
import pdf from "../assets/chase-w-edwards-resume.pdf";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="brand-name">
                    <li><a href="#about">Chase Edwards</a></li>
                </div>
                <div className="nav-links">
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href={pdf} target="_blank" rel="noreferrer">Resume</a></li>
                </div>
            </nav>
        );
    }
}


export default Navbar;