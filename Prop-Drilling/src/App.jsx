// 1.Task: Prop Drilling Message Flow

// import React from "react";
// import Parent from "./Components/Parent.jsx";

// function App () {
//   const message = "Hello from App !";
//   return (
//     <>
//     < Parent message = {message}/>
//     </>
//   )
// };

// export default App;


// 2.Task: Profile Card Using Props

import React from "react";
import ProfileCard from './ProfileCard/ProfileCard.jsx';

function App () {
  const users = [
    {
      name : "Maya",
      title : "Software Developer",
      bio: "Loves React and clean UI." 
    },

    {
      name : "Parul",
      title : "Backend Engineer", 
      bio: "Enjoys solving logic problems."
    },

    { name: "Meera", 
      title: "UI/UX Designer", 
      bio: "Passionate about user experience." 
    }
  ];

  return (
  <div className="app-container">
  {users.map((user, index)=>(
  <ProfileCard key={index} {...user} />
  ))}
  </div>
  )
};

export default App;