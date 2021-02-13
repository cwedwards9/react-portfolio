import React, {Component} from "react";
import Project from "./Project";
import "./ProjectList.css";
import { projectData } from "../ProjectData";

class ProjectList extends Component {
    
    render() {
        const projects = projectData.map(proj => (
            <Project
                key={proj.id}
                image={proj.image}
                alt={proj.alt}
                name={proj.name}
                desc={proj.desc}
                appLink={proj.appLink}
                repoLink={proj.repoLink}
            />
        ));
        return (
            <div className="card-container">
                {projects}
            </div>
        );
    }
}


export default ProjectList;