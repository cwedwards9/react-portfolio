import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./MainSections/About";
import ProjectList from "./MainSections/ProjectList";
import Contact from "./MainSections/Contact";
import Footer from "./Footer";
import "./Portfolio.css";


class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <Navbar />
                <Banner />
                <main className="container-fluid px-0">
                    {/* About Section */}
                    <section id="about">
                        <div className="row d-flex justify-content-center mb-2">
                            <div className="col-md-8 text-center">
                                <h1 className="sectionTitle">About Me</h1>
                                <hr />
                            </div>
                        </div>
                        <About />
                    </section>


                    {/* Project Section */}
                    <section id="portfolio">
                        <div className="row d-flex justify-content-center mb-4">
                            <div className="col-md-8 text-center">
                                <h1 className="mb-4 sectionTitle">My Projects</h1>
                                <p className="sectionDesc">This portfolio showcases the latest projects that I have completed. Click on a project's link to go to the 
                                repository or to see the deployed application. <strong>Apps may take a second to wake up.</strong>
                                </p>
                                <hr />
                            </div>
                        </div>
                    <ProjectList />
                    </section>


                    {/* Contact Section */}
                    <section id="contact">
                        <div className="row d-flex justify-content-center mb-4">
                            <div className="col-md-8 text-center">
                                <h1 className="mb-4 sectionTitle">Contact Me!</h1>
                                <p className="sectionDesc">Feel free to reach out to me! I am always open to meeting new people and making new professional connections!</p>
                                <hr />
                            </div>
                        </div>
                        
                        <Contact />
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}


export default Portfolio;