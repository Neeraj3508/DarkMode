import React, {useContext} from 'react';
import "./Navbar.css";
import {DarkModeContext} from "../Context/DarkModeContext";

function Navbar() {
    const [toggle, setToggle] = useContext(DarkModeContext);
    return (
        <div className="navbar">
            <div className="nav-logo">
                Test
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Gallery</li>
                <li><button style={{backgroundColor: toggle ? "#1b1c1e": "white", color : toggle ? "white" : "#1b1c1e"}} className="toggle-button" onClick={
                    () => {
                        setToggle(toggle => !toggle)
                    }
                }>Toggle</button></li>
            </ul>
        </div>
    )
}

export default Navbar
