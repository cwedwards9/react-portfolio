import React from "react";
import './Tech.css';

export default function Tech() {
    return (
      <div className="technologies">
        <section className="front-end-tech">
            <i className="fas fa-code tech-icon"></i>
            <h2 title="More skills can be found in my resume">Front-End Skills</h2>
            <p>I value accessible sites for everyone, bringing an intuitive and clean design with thoughtful interactions.</p>
            <h3>Languages and Technologies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS / SASS</li>
                <li>EJS / Handlebars</li>
                <li>JavaScript / TypeScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>AngularJS / Angular</li>
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
                <li>SQL</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        </section>
      </div>
    );
}