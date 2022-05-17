import React from 'react';
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import {DarkModeProvider} from "./components/Context/DarkModeContext";


function App() {
    return (
        <DarkModeProvider>
            <React.StrictMode>
                <div className="app">
                    <Navbar/>
                    <Body/>
                </div>
            </React.StrictMode>
        </DarkModeProvider>
    )
}

export default App
