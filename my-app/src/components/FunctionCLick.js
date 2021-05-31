import React from 'react'

function FunctionCLick() {
    function clickHandler() {
        console.log("Clicked!!")
    }
    return (
        <div>
            <button onClick={clickHandler}>Love You!!</button>
        </div>
    )
}

export default FunctionCLick
