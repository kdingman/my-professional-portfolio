import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBIcon } from 'mdb-react-ui-kit';



function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/kdingman"><MDBIcon fab icon="github" /></a>
            <a href="https://www.linkedin.com/in/kelly-dingman-a1786769/"><MDBIcon fab icon="linkedin" /></a>
            <a href="https://twitter.com/kcdinger"><MDBIcon fab icon="twitter-square" /></a>
            <p>Kelly Dingman | 2022</p>
        </div>
    );
};

export default Footer;