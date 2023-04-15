import React from "react";
import logo from "../images/Troll Face.png";
import "../component styles/Navbar.css"

export default function Navbar(){
    return(
        <nav>
            <div className={"lg-container"}>
                <img
                    src={logo}
                    alt={"logo"}
                />

                <h1 className={'lg--name'}>
                    Meme Generator
                </h1>
            </div>
                <h3 className={"nav-sm-text"}>
                    React Course - Project 3
                </h3>
            </nav>
    );
}