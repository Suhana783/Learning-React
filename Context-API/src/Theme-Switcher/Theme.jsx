import React, {useContext, useEffect} from 'react';
import { ThemeContext } from './ThemeC.jsx';

function ThemeChanger () {
    const {theme, Toggletheme, color} = useContext(ThemeContext);

    useEffect(()=>{
        document.body.style.backgroundColor = theme;
        document.body.style.color = color;
    },[theme, color])
    return(
        <>
        <h1>React Theme Switcher</h1>
        <button onClick={Toggletheme}>Toggle Theme</button>
        </>
    
    )
};

export default ThemeChanger;