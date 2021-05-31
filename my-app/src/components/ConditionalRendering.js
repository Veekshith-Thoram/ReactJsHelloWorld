import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
        this.clickHandler =this.clickHandler.bind(this);
    }
    clickHandler() {
        if(this.state.isLoggedIn){
            this.setState({isLoggedIn: false});
        } else {
            this.setState({isLoggedIn: true});
        }
        
    }
    render() {
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             <h2>Welcome Vishwas</h2>
        //             <button onClick={this.clickHandler}>LogOut!</button>

        //         </div>
        //     )
        // } else{
        //     return(
        //         <div><h2>Welcome Guest</h2>
        //         <button onClick={this.clickHandler}>LogIn</button>
        //         </div>
        //     )
        // }
        //the shprt circuit operator
        return this.state.isLoggedIn && <div>Hello Pushpa</div>
    }
}

export default ConditionalRendering
