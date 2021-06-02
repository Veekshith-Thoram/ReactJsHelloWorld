import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comment: "",
             topic: "vue",
        }
    }
    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value})
        // console.log(this.state.username)
    }
    commentChangHandler = (event) => {
        this.setState({comment: event.target.value});
    }
    submitHandler = (event) => {
        alert(`username: ${this.state.username}, comment: ${this.state.comment}, topic: ${this.state.topic}`)
        event.preventDefault();
    }
    topicHandler = (event) => {
        this.setState({topic: event.target.value})   
    }
    render() {
        return (
            <div>
                <h2>Form Component</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <label for="email">Username</label>
                    <input name="email" value={this.state.username} onChange={this.usernameChangeHandler} />
                    </div>
                    <div>
                        <label for="textarea">Comments</label>
                        <textarea name="textarea" value={this.state.comment} onChange={this.commentChangHandler}></textarea>
                    </div>
                    <div>
                        <select value={this.state.topic} onChange={this.topicHandler}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms
