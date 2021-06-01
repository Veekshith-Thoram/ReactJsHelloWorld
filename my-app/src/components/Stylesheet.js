import React from 'react'
import "./myStyles.css";

function Stylesheet(props) {
    var className=  props.primary ? "primary" : "";
    return (
        <div>
            <h1 className={className}>Hello Pawan Kalyan!!</h1>
        </div>
    )
}

export default Stylesheet
