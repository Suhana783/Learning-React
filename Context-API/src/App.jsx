import React from "react";
import { ThemeProvider } from "./Components/ThemeContext";
import ThemeComponent from "./Components/ThemeComponent";


function App() {
  return(
    <ThemeProvider>
      <ThemeComponent/>
    </ThemeProvider>
  );
}

export default App;