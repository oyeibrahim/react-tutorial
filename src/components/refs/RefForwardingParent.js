import React, { Component } from 'react'
import RefForwardingChild from './RefForwardingChild'

//######################
// Ref Forwarding Implementation
// Ref Forwarding means - forward ref from parent to child to directly access the child's element
// unlike RefWithClass which uses class to access the child element, this one access the element
// directly. 
// We will make the child component a Functional Component
//######################

class RefForwardingParent extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        //focus the input element
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <p>Refs Forwarding - directly access child component element</p>
                <p>Click the button to focus the input</p>

                {/* call child component pass in ref of parent component as prop */}
                <RefForwardingChild ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus the Input</button>
            </div>
        )
    }
}

export default RefForwardingParent
