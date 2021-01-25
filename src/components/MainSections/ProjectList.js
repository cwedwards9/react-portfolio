import React, {Component} from "react";
import Project from "./Project";
import "./ProjectList.css";
import smartMoneyImg from "../../assets/smart-money-img.PNG";
import fitnessTracker from "../../assets/fitness-tracker-img.PNG";
import petItImg from "../../assets/petit-img.PNG";
import employeedDirectoryImg from "../../assets/employee-directory-img.PNG";

class ProjectList extends Component {
    static defaultProps = {
        projects: [
            {
                id: 1,
                image: smartMoneyImg,
                alt: "A dashboard that shows the user's budget, a list of their inputted transactions, and a graph to represent their spending by category.",
                isStarred: true,
                name: "Budget Tracker",
                desc: "A full-stack app used for tracking monthly transactions and bills to pay.",
                appLink: "https://smart-money-app.herokuapp.com/",
                repoLink: "https://github.com/cwedwards9/budget-tracker"
            },
            {
                id: 2,
                image: petItImg,
                alt: "A post of a kitten resting in a persons arm.",
                isStarred: false,
                name: "PetIt - Social Media App (In development)",
                desc: "A social media for users to post pictures of their pets. All pets welcome!",
                appLink: "",
                repoLink: "https://github.com/cwedwards9/social-media-pet-app"
            },
            {
                id: 3,
                image: fitnessTracker,
                alt: "Two graphs, a line graph and a bar graph and two circle charts below measuring performance of workouts and exercises.",
                isStarred: false,
                name: "Fitness Tracker",
                desc: "An app that allows a user to create and track workouts.",
                appLink: "https://fitness-tracking-application.herokuapp.com/stats",
                repoLink: "https://github.com/cwedwards9/fitness-tracker"
            },
            {
                id: 4,
                image: employeedDirectoryImg,
                alt: "A heading that reads 'Employee Directory' and below it is a list of employees names and their picture.",
                isStarred: false,
                name: "Employee Directory",
                desc: "An employee list that can be sorted and filtered based on user input, made with React.",
                appLink: "https://cwedwards9.github.io/employee-directory-react/",
                repoLink: "https://github.com/cwedwards9/employee-directory-react"
            }
        ]
    }
    render() {
        const projects = this.props.projects.map(proj => (
            <Project
                key={proj.id}
                image={proj.image}
                alt={proj.alt}
                isStarred={proj.isStarred}
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