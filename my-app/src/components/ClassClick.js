import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked here!!")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>I love you!!</button>
            </div>
        )
    }
}

export default ClassClick
