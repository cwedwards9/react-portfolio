import React, {Component} from "react";
import "./About.css";
import ProfessionalPic from "../../assets/professional-pic.jpg";
import CollegeGradPic from "../../assets/college-grad.jpg"

class About extends Component {
    render() {
        return (
            <div>
                <div className="row d-flex mt-2 justify-content-center aboutSec">
                    <div className="col-md-6 mb-3 d-flex flex-column justify-content-center">
                        <p className="aboutPar">I am a Full Stack Web Developer with a background in Information Systems and a dedication to
                        continuous learning. I am always finding creative and efficient ways to solve issues. I am known among 
                        staff and peers as a hard worker with a strong attention to detail. I have recently graduated with a certificate in 
                        Full Stack Web Development from Case Western Reserve University.
                        </p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={ProfessionalPic} className="aboutPics" alt="Chase in a suit" />
                    </div>
                </div>

                <div className="row d-flex justify-content-center aboutSec">
                    <div className="col-md-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <img src={CollegeGradPic} className="aboutPics" alt="Chase at college graduation in cap and gown" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center order-1 order-md-2">
                        <p className="aboutPar">I graduated from The University of Akron in December of 2019 with a BBA in Information 
                        Systems Management. This is where I was first exposed to programming and data structures. Although that was not 
                        the concentration for my undergraduate degree, it opened my eyes to the world of technology and from there my interest in software and 
                        web development grew.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;