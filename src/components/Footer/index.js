import React from "react";

import { githubImage, linkedin, twitter } from "../../assets";


function Footer() {
    return (
        <div className="footer" id="footer">
            <a href="https://github.com/kdingman" target="_blank"><img src={githubImage} alt="Github" className="icon" /></a>
            <a href="https://www.linkedin.com/in/kelly-dingman-a1786769/" target="_blank"><img src={linkedin} alt="LinkedIn" className="icon" /></a>
            <a href="https://twitter.com/kcdinger" target="_blank"><img src={twitter} alt="Twitter" className="icon" /></a>
        
        <p className="footer-info">
            &copy; Kelly Dingman
        </p>
        </div>
    );
};

export default Footer;