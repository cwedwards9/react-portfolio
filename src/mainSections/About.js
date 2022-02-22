import React from "react";
import "./About.css";
import chasePic from "../assets/chase-pic.jpg";

export default function About() {
    return (
        <div className="aboutContent">
            <img src={chasePic} className="aboutPic" alt="Chase in button-up collared shirt." />
            <div className="aboutDesc">
                <p>My interest in web development started back in 2018. I was earning my undergraduate degree in 
                Information Systems when I was exposed to programming and database management. This was not the core concentration
                of my major, but it opened my eyes to the world of technology. Since then, I have earned my degree as well as a
                certificate in Full Stack Web Development from Case Western Reserve University. I have completed several individual 
                and group projects along the way, interned as a Front End Web Developer, and now I am working as a Junior Front-End 
                Developer and really loving the work.
                </p>
            </div>
        </div>
    );
}