import React from "react";

import headerImage from "../../assets/headerImage.png";


function Header() {
    
    return (
        <header className="flex-row px-1"> 
        <img src={headerImage} className="Hero" style={{ width: "100%" }} alt="headerImage" />
            <h2>
                <a id="link" href="/">
                    <span role="img" aria-label="sunshine">🔆</span>
                </a>
            </h2>

        </header>
    );
};

export default Header;