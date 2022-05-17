import React, {useContext, useEffect, useState} from 'react';
import {DarkModeContext} from "../Context/DarkModeContext";
import "./Body.css";
import Card from "../Card/Card";
async function getData() {
    return await fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}
function Body() {
    const [toggle] = useContext(DarkModeContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        let mounted = true;
        getData()
            .then(items => {
                if(mounted) {
                    setData(items)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div className="body" style={{backgroundColor : toggle ? "#1b1c1e" : "white", color : toggle ? "white" : "#1b1c1e", height:"100vh", overflow: "auto"}}>
            {data.length === 0 && <h1>Loading...</h1>}
            {data && data.map((item, index) => {
                return <Card key={index} title={item.name.common} content={item.name.official}/>
            })}
        </div>
    )
}

export default Body
