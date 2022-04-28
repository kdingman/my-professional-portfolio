import React from "react";

import githubImage from "../../assets/githubImage.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";


function Footer() {
    return (
        <div className="footer" id="footer">
            <a href="https://github.com/kdingman"><img src={githubImage} alt="Github" className="icon" /></a>
            <a href="https://www.linkedin.com/in/kelly-dingman-a1786769/"><img src={linkedin} alt="LinkedIn" className="icon" /></a>
            <a href="https://twitter.com/kcdinger"><img src={twitter} alt="Twitter" className="icon" /></a>
        
        <p className="footer-info">
            &copy; 2022
        </p>
        </div>
    );
};

export default Footer;