import React, {useContext} from 'react';
import {DarkModeContext} from "./DarkModeContext";
import "./Body.css";

function Body() {
    const [toggle] = useContext(DarkModeContext);
    return (
        <div className="body" style={{backgroundColor : toggle ? "#1b1c1e" : "white", color : toggle ? "white" : "#1b1c1e", height:"100vh"}}>
            <h1>Hello World</h1>
        </div>
    )
}

export default Body
