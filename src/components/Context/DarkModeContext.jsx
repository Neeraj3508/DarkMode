import React,{useState,createContext} from 'react';


export const DarkModeContext = createContext()

export const DarkModeProvider = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <DarkModeContext.Provider value={[toggle,setToggle]}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

