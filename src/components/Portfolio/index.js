import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from "../Project";
import data from "../../utils/data.json";

function Portfolio() {
    return (
        <section>
            <div className="my-5">
                <h2>Kelly Dingman's Professional Portfolio</h2>
            </div>

            <div className="container flex-row center">
                {data.map((project) => (
                    <Projects 
                    key={project.id}
                    image={project.image}
                    name={project.name}
                    github={project.github}
                    live={project.live}
                    />
                ))}
            </div>

        </section>
    );
};

export default Portfolio;