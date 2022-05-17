import React, {useEffect, useMemo, useState} from 'react';

const slowFunction = (number) => {
    console.log("calling slow function");
    for (let i = 0; i < 1000000000; i++) {
    }
    return number * 2;
}
const ProfilingTest = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    //use Memo as slow function was being called every time even when number is not changing
    const doubleNumber = useMemo(() =>  slowFunction(number), [number])
    // const doubleNumber = slowFunction(number)
    //use Memo as theme style is created at new memory block every time component re render
    const themeStyles = useMemo(() => {
        return {
            backgroundColor : dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark])
    useEffect(() => console.log("theme changed"), [themeStyles])
    return (
        <div>
            <input type="number" name="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/><br/>
            <button onClick={() => setDark(dark => !dark)}>change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
};

export default ProfilingTest;