import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App.jsx";
import "./index.css";
import ProfilingTest from "./components/ProfilingTest/ProfilingTest";

let element = <ProfilingTest />;
let container = document.getElementById("root")
const root = createRoot(container);
root.render(element)