import React from "react";
import { Route, Redirect } from "react-router-dom";

import headerImage from "../../assets/headerImage.png";

import Nav from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Project";
import Resume from "../Resume";


function Header() {
    
    return (
        <header className="flex-row px-1"> 

            <h2>
            <a id="link" href="/">
                    <span role="img" aria-label="sunshine">🔆</span>
            </a>

            <img src={headerImage} className="Hero" style={{ width: "100%" }} alt="headerImage" />

            <Nav />
            </h2>

            <div className="content">
                <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/resume" component={Resume}/>
            </div>

        </header>
    );
};

export default Header;