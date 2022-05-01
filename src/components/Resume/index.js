import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBIcon } from "mdbreact";


function Resume() {
    return (
        <section className="my-5">
            <h2>My Resume</h2>

            <div className="resume">
                    Business Professional with experience in Radio Promotions and Medical Billing.
                    <br></br>
                    <p>
                       <a href="https://www.linkedin.com/in/kelly-dingman-a1786769/"><MDBIcon fab icon="linkedin" size="3x" /></a>
                    </p> <br></br>
                    <p>
                        Check out all of my <a href="https://github.com/kdingman?tab=repositories" className="Repos"> projects</a>
                    </p>
                </div>
        </section>
    );
};

export default Resume;