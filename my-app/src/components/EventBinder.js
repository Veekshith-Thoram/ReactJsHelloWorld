import React, { Component } from 'react'

export class EventBinder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello Pushpa!!"
        }
        // this.clickHandler = this.clickHandler.bind(this);
    }
    
    // clickHandler() {
    //     this.setState({message: "I love you Pushpa!!"})
    // }
    clickHandler = () => {
        this.setState({message: "Hey I love You Pushpa"})
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Hey Pushpa!!</button>
            </div>
        )
    }
}

export default EventBinder
