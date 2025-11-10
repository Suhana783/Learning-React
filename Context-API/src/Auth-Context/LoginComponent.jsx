import React, {useContext} from "react";
import {AuthContext} from './AuthContext';

const LoginComponent = () => {
    const {user, setUser} = useContext(AuthContext);

    return(
        <div>
            <p>{user ? `Welcome, ${user}` : "Please log in"}</p>
            <button onClick={()=> setUser("Suhana")}>Log In</button>
        </div>
    );
};

export default LoginComponent;