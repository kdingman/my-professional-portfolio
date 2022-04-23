import React, { useState } from "react";


function Nav() {
    const [contactSelected, setContactSelected] = useState(false);
    return (
        <div className="row nav" id="nav">
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
        </div>
    );
};

export default Nav;