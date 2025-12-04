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
import {AuthProvider} from './Auth/AuthContext.jsx';
import LoginComponent from './Auth/LoginComponent.jsx';

function App () {
  return (
    <AuthProvider>
      <LoginComponent />
    </AuthProvider>
  );
}

export default App;


// 3.Task:Create a “Language Selector” using Context API

// import { LanguageProvider } from './Language/LanguageContext';
// import LanguageSelector from './Language/LanguageSelector';


// function App () {
//   return (
//     <LanguageProvider>
//       <LanguageSelector />
//     </LanguageProvider>
//   )
// };

// export default App;


// 4. Task: React Theme Switcher using Context API

// import { ThemeProvider } from "./Theme-Switcher/ThemeC.jsx";
// import ThemeChanger from "./Theme-Switcher/Theme.jsx";

// function App () {
//     return(
//         <>
//         <ThemeProvider>
//             <ThemeChanger/>
//         </ThemeProvider>
//         </>
//     )
// };

// export default App;