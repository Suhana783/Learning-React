import React from 'react';
import { createContext, useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("white");

    function Toggletheme () {
        if (theme == "white"){
            setTheme("black")
        }
        else {
            setTheme("white")
        }
    }
    
    let color;
        if (theme === "white") {
            color = "black";
        } else {
            color = "white";
        }


    return(
        <ThemeContext.Provider value={{theme, Toggletheme, color}} >
            {children}
        </ThemeContext.Provider>
    )
};

