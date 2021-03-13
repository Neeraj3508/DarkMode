import React from 'react';
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./components/DarkModeContext";


function App() {
    return (
        <DarkModeProvider>
            <div className="app">
                <Navbar />
                <Body />
            </div>
        </DarkModeProvider>
    )
}

export default App
