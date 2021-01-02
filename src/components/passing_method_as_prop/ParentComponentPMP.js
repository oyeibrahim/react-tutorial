import React, { Component } from 'react'

import ChildComponentPMP from './ChildComponentPMP';

//######################
// Communicate between Two Components and Passing in Method as props
// This is parent component and is made a Class Component because we want to maintain a State in it
//######################

class ParentComponentPMP extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent",
        }

        //event binding
        this.greetParent = this.greetParent.bind(this);
        this.greetChild = this.greetChild.bind(this);
    }

    //without parameters
    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }
    //with parameters
    greetChild(childName) {
        alert(`Hello ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponentPMP gParentHandler={this.greetParent} gChildHandler={this.greetChild} />
            </div>
        )
    }
}

export default ParentComponentPMP
