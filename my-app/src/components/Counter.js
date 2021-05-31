import React, { Component } from 'react'

class Counter extends Component {
    state= {
        count: 0,
    }
    likeHandler = () => {
        // this.setState({count: this.state.count + 1})
        this.setState((prevState) => ({
            count:prevState.count +1
        }))
    }
    incrementFive = () => {
        this.likeHandler()
        this.likeHandler()
        this.likeHandler()
        this.likeHandler()
        this.likeHandler()
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Like!</button>                
            </div>
        )
    }
}

export default Counter
