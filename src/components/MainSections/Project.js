import React, {Component} from "react";

class Project extends Component {
    render() {
        const { image, alt, isStarred, name, desc, appLink, repoLink } = this.props;
        return (
            <div className="card">
                <img src={image} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{name} 
                        {isStarred ? <i className="fas fa-star"></i> : "" }
                    </h5>
                    <p className="card-text">{desc}</p>
                    <a href={appLink} target="_blank" rel="noreferrer"className="app-link"><i className="fas fa-link"></i> App</a>
                    <a href={repoLink} target="_blank" rel="noreferrer" className="repo-link"><i className="far fa-folder-open"></i> Repo</a>
                </div>
            </div>
        );
    }
}


export default Project;