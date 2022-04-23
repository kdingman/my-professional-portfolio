import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from "../Project";
import data from "../../utils/data";

function PortfolioContainer(props) {
    return <div className="portfolio-container">{props.children}</div>
}

function Portfolio() {
    return (
        <section>
            <div className="project">
                <h1 className="title">Kelly Dingman Professional Portfolio</h1>
            </div>

            <PortfolioContainer id="card-data">
                {data.map((project) => (
                    <Projects 
                    key={project.id}
                    image={project.image}
                    name={project.name}
                    github={project.github}
                    live={project.live}
                    />
                ))}
            </PortfolioContainer>

        </section>
    );
};

export default Portfolio;