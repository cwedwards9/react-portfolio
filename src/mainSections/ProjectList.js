import React from "react";
import "./ProjectList.css";
import { projectData } from "../utils/ProjectData";

export default function ProjectList() {
    return (
        <div className="card-container">
            {projectData.map(project => (
                <div className="card">
                    <img src={project.image} className="card-img-top" alt={project.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.desc}</p>
                        <a href={project.appLink} target="_blank" rel="noreferrer"className="app-link"><i className="fas fa-link"></i> App</a>
                        <a href={project.repoLink} target="_blank" rel="noreferrer" className="repo-link"><i className="far fa-folder-open"></i> Repo</a>
                    </div>
                </div>
            ))}
        </div>
    );
}