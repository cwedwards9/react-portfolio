import React from "react";
import './Tech.css';

export default function Tech() {
    return (
      <div className="technologies">
        <section className="front-end-tech">
            <i className="fas fa-code tech-icon"></i>
            <h2>Front-End Skills</h2>
            <p>I value accessible sites for everyone, bringing an intuitive and clean design with thoughtful interactions.</p>
            <h3>Languages and Technologies:</h3>
            <ul>
                <li>HTML / CSS</li>
                <li>SASS / SCSS</li>
                <li>EJS / Handlebars</li>
                <li>JavaScript / jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
        </section>

        <section className="back-end-tech">
            <i className="fas fa-server tech-icon"></i>    
            <h2>Back-End Skills</h2>
            <p>I value keeping code organized and modular. Security and efficiency are always a priority.</p>
            <h3>Languages and Technologies:</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL / MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                
            </ul>
        </section>
      </div>
    );
}