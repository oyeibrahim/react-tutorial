import React, { Component } from 'react'
import PureComponent from './PureComponentPCD'
import RegularComponent from './RegularComponentPCD'

//######################
// Pure Component Demo.
// What is Pure Component - is a Class Component that extends PureComponent instead of Component (regular Component)
// Difference - PureComponents implements shouldComponentUpdate() by using a Shalow Comparison (===) to check
// if the previous state has changed with the new state, so it only updates when there is a change.
// Regular Component doesn't implenment shouldComponentUpdate() and so will return true for any update even
// if the previous state hasn't change.
//
// So Pure Components prevent unnecessary update
// IMPORTANT - when using Pure Component, you MUST not change state directly, you MUST use setState as changing
// the state directly will return the same object and so Shalow Comparison will not detect a state change but
// setState will return a new object.
// 
// If parent component is Pure Component and no update occurs, child components too will never update even 
// if they are Regular Components
//
// NOTE - It is just save to always use Regular Component, only use Pure Component if there is a performance
// hit with Regular Component.
// 
// This demo will do an interval update (the update will not change the state) in this Parent Component 
// and have two children components, one is a Pure Component and the other is a Regular Component, they 
// will both print to the console to alert of update, so we can check the difference between Regular Component
// and Pure Component
//######################

class ParentComponentPCD extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Ibrahim'
        }
    }

    //since we are performing a side-effect task similar to HTTP request, we place the code in 
    //componentDidMount()
    //commented - uncomment to test
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             name: 'Ibrahim'
    //         })
    //     }, 2000)
    // }

    render() {

        console.log("*************** Parent Component PCD render() ***************")

        return (
            <div>
                <p>Pure Component Feature Demonstration - Uncomment the componentDidMount() method to test</p>
                <PureComponent name={this.state.name} />
                <RegularComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponentPCD
