import React from "react";
import Child from './Child.jsx';

function Parent ({message}) {

    return (
        <>
        <Child message = {message}/>
        </>
    )
};

export default Parent;