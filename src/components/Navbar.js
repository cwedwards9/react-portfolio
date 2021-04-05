import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import pdf from "../assets/chase-w-edwards-resume.pdf";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <li><Link to="about" className="brandName"spy={true} smooth={true} duration={500}>Chase Edwards</Link></li>
            <ul className="nav-list">
                <li><Link to="tech" className="nav-link" spy={true} smooth={true} duration={500}>Tech</Link></li>
                <li><Link to="projects" className="nav-link"spy={true} smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" className="nav-link"spy={true} smooth={true} duration={500}>Contact</Link></li>
                <li><a href={pdf} target="_blank" rel="noreferrer" className="nav-link">Resume</a></li>
            </ul>
        </nav>
    );
}