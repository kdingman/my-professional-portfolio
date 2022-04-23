import React from "react";

import headerImage from "../../assets/headerImage.png";

import Nav from "../Nav";

function Header() {
    
    return (
        <header className="flex-row px-1"> 

            <h2>
            <a id="link" href="/">
                    <span role="img" aria-label="sunshine">🔆</span>
            </a>
            <Nav />
            <img src={headerImage} className="hero" style={{ width: "100%" }} alt="headerImage" />

           
            </h2>



        </header>
    );
};

export default Header;