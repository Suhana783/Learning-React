import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import './Theme.css';

function ThemeComponent() {
  const { color, setColor } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="theme-container">
      <h1>Theme Changer using Context API</h1>
      <div className="buttons">
        <button onClick={() => setColor("lightblue")}>Blue</button>
        <button onClick={() => setColor("lightpink")}>Pink</button>
        <button onClick={() => setColor("lightgreen")}>Green</button>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("white")}>White</button>
      </div>
    </div>
  );
}

export default ThemeComponent;
