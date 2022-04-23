import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import githubLogo from "../../assets/githubLogo.png";
import livesite from "../../assets/livesite.png";


function Projects(props) {
    return (
        <div className="card">
            <div className="container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p className="project-name" id="card-name">{props.name}</p>

                <p>
                    <a href={props.github}><img src={githubLogo} alt="Repo" id="project-icon" /></a>
                    <a href={props.live}><img src={livesite} alt="Live" id="project-icon" /></a>
                </p>

            </div>
        </div>
    );
};

export default Projects;