import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Veekshith"
        }
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(pushpa) {
        alert(`Hello ${this.state.parentName} from ${pushpa}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
