import React, {Component} from "react";

class Message extends React.Component{
constructor(){
    super()
    this.state = {
        message: "Welcome User!!",
        likeCounter : 0
    }
}
clickHandler() {
    this.setState({message : "Tq for subscribing!!"})
    
}
likeHandler = () => {
    this.setState({likeCounter: this.state.likeCounter+1})
}
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.clickHandler()}>Subscribe!!</button>
                {this.props.children}
            </div>
        )
    }
}

export default Message;