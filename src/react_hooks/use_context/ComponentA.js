import React from 'react'
import ComponentB from './ComponentB'

//######################
// useContext Implementation
//
// useContext is the Hook implementation of Context
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
// We can set a default context value and it will be rendered when there is no override for it
// but if there is override then the override will be displayed. The code will be shown.
//
// To use Hook useContext, just call the method in the file you want to use it
//######################

function ComponentA() {
    return (
        <ComponentB />
    )
}

export default ComponentA
