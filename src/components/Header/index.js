import React from "react";
import bootstrap from "bootstrap";

import headerImage from "../../assets/headerImage.jpg";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } =  props;
}

function Header() {
    return (
        <header className="flex-row px-1"> 
        <img src={headerImage} className="Hero" style={{ width: "100%" }} alt="headerImage" />
            <h2>
                <a id="link" href="/">
                    <span role="img" aria-label="sunshine">🔆</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a id="about" href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Portfolio</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;