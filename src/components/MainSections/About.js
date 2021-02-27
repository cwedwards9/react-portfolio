import React, {Component} from "react";
import "./About.css";
import chasePic from "../../assets/chase-pic.jpg";
// import CollegeGradPic from "../../assets/college-grad.jpg"

class About extends Component {
    render() {
        return (
            <div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center ">
                        <img src={chasePic} className="aboutPics" alt="Chase in button-up collared shirt." />
                    </div>
                </div>
                <div className="row d-flex mt-2 justify-content-center aboutSec">
                    <div className="col-md-10 mb-3 d-flex flex-column justify-content-center">
                        <p className="aboutPar">My interest in software and web development started back in 2018. I was earning my undergraduate degree in 
                        Information Systems when I was exposed to programming and database management. This was not the core concentration
                        of my major, but it opened my eyes to the world of technology. Since then, I have earned my degree and I have earned
                        a certificate in Full Stack Web Development from Case Western Reserve University. I have also completed several individual and group projects 
                        where I was able to utilize my skills I have learned along the way to develop full-stack web applications I am proud of. I am
                        a hard worker, naturally curious, and dedicated to learning new things.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;