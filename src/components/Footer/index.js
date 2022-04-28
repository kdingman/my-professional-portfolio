import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function Footer() {
    return (
        <div className="container flex-row footer">
            <a href="https://github.com/kdingman"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/kelly-dingman-a1786769/"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/kcdinger"><i class="fab fa-twitter"></i></a>
            <p className="mx-1">Kelly Dingman | 2022</p>
        </div>
    );
};

export default Footer;