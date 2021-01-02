import React, { Component } from 'react'

//######################
// Implement Ref By - Creating a ref method in child component and calling the method from
// parent component
// This is the child component
// I am using createRef method
//######################

class RefWithClassChild extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    //this is the method that will be called by parent component to focus the input
    focusInputCustomMethod() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <p>Click the button to focus the input</p>

                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}

export default RefWithClassChild
