import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./mainSections/About";
import Tech from "./mainSections/Tech";
import ProjectList from "./mainSections/ProjectList";
import Contact from "./mainSections/Contact";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";
import "./Portfolio.css";


export default function Portfolio() {
    return (
        <div className="Portfolio">
            <Navbar />
            <Banner />
            <main className="container-fluid px-0">
                {/* About Section */}
                <Fade>
                <section id="about" className="main-section">
                    <div className="row d-flex justify-content-center mb-2">
                        <div className="col-md-8 text-center">
                            <h1 className="sectionTitle">About Me</h1>
                            <hr />
                        </div>
                    </div>
                    <About />
                </section>


                {/* Tech Section */}
                <section id="tech" className="main-section">
                    <div className="row d-flex justify-content-center mb-2">
                        <div className="col-md-8 text-center">
                            <h1 className="sectionTitle">Technologies</h1>
                            <hr />
                        </div>
                    </div>
                    <Tech />
                </section>


                {/* Project Section */}
                <section id="projects" className="main-section">
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <h1 className="mb-4 sectionTitle">My Projects</h1>
                            <p className="sectionDesc">The latest projects that I have completed. Click on a project's link to go to the 
                            repository or to see the deployed application. <strong>Apps may take a second to wake up.</strong>
                            </p>
                            <hr />
                        </div>
                    </div>
                <ProjectList />
                </section>


                {/* Contact Section */}
                <section id="contact" className="main-section">
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <h1 className="mb-4 sectionTitle">Contact Me!</h1>
                            <p className="sectionDesc">Feel free to reach out to me! I am always open to meeting new people and making new professional connections!</p>
                            <hr />
                        </div>
                    </div>
                    
                    <Contact />
                </section>
                </Fade>
            </main>
            <Footer />
        </div>
    );
}