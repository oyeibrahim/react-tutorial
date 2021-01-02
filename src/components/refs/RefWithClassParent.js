import React, { Component } from 'react'
import RefWithClassChild from './RefWithClassChild'

//######################
// Implement Ref By - Creating a ref method in child component and calling the method from
// parent component
// This is the parent component
// I am using createRef method
//######################

class RefWithClassParent extends Component {

    constructor(props) {
        super(props)

        this.parentCompRef = React.createRef()
    }

    clickHandler = () => {
        //call child component's custom focus method to focus the input in child component
        this.parentCompRef.current.focusInputCustomMethod()
    }

    render() {
        return (
            <div>
                <p>Refs With Class - use parent child components to implement Ref</p>

                {/* call child component pass in ref of parent component as prop */}
                <RefWithClassChild ref={this.parentCompRef} />
                <button onClick={this.clickHandler}>Focus the Input</button>
            </div>
        )
    }
}

export default RefWithClassParent
