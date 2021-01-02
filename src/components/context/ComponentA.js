import React, { Component } from 'react'
import ComponentB from './ComponentB'

//######################
// Context Implementation
//
// Context - is the way to pass information to a whole group of components, without having to 
// pass it as props.
// Example Problem - If we want to pass info to ComonentC.js using normal props
// we will have to pass it as prop to ComponentA.js, then that one will send another prop with the info to 
// ComponentB.js, then that one will also send another prop with the info to ComponentC.js
// Now imagine we have 10 children components and we want to pass the info to the 10th.
//
// So Context will help make an info available in all components automatically without having 
// to pass it in the props format
//
// Usage:
// 1 - Using normal way, will be used in ComponentC.js
// 2 - Using contextType, will be used in ComponentB.js
//
// We can set a default context value and it will be rendered when there is no override for it
// but if there is override then the override will be displayed. The code will be shown.
//######################

class ComponentA extends Component {
    render() {
        return (
            <ComponentB />
        )
    }
}

export default ComponentA
