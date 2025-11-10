// 1. Task Name: Theme Changer using Context API

// import React from "react";
// import { ThemeProvider } from "./Components/ThemeContext";
// import ThemeComponent from "./Components/ThemeComponent";


// function App() {
//   return(
//     <ThemeProvider>
//       <ThemeComponent/>
//     </ThemeProvider>
//   );
// }

// export default App;


// 2. Task: Create a Login System using Context API.

import React from 'react';
import {AuthProvider} from './Auth-Context/AuthContext.jsx';
import LoginComponent from './Auth-Context/LoginComponent.jsx';

function App () {
  return (
    <AuthProvider>
      <LoginComponent />
    </AuthProvider>
  );
}

export default App;