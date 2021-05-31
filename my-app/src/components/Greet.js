import React from "react";

// function Greet(x) {
//     return <h1>Hello {x.name}</h1>
// }

const Greet = (props) =>  {
    console.log(props);
    return(
        <div>
    <h1>Hello {props.name}</h1>
        {props.children}
        </div>
    );
}


export default Greet;