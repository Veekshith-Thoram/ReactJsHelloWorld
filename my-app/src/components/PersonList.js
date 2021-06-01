import React from 'react'

function PersonList(props) {
    return (
        <div>
            <h1>I am {props.person.name}, i know {props.person.language} with {props.person.skill} profficiency.</h1>
        </div>
    )
}

export default PersonList
