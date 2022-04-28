import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



function Projects(props) {
    return (
        <div className="container">
            <div className="card">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <h4 className="project-name">{props.name}</h4>

                <p>
                    <a href={props.github}><i class="fab fa-github"></i></a>
                    <a href={props.live}><i class="fas fa-code"></i></a>
                </p>

            </div>
        </div>
    );
};

export default Projects;