import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=> props.greetHandler("Pushpa")}>Greet Message</button>
        </div>
    )
}

export default ChildComponent
