import React, { Component } from 'react'
import LifecycleChild from './LifecycleChild'

//######################
// All Lifecycle Methods include according to order
// 1 - Mounting Lifecycle 
// (Has 4 Methods - constructor | static getDerivedStateFromProps | render | componentDidMount)
// 2 - Updating Lifecycle 
// (Has 6 Methods - static getDerivedStateFromProps | shouldComponentUpdate | render | getSnapshotBeforeUpdate | componentDidUpdate)
// 3 - Unmounting Lifecycle 
// (Has 1 Method - componentWillUnmount [Here you should cancel all subscriptions, hadlers, timers and Network request - Don't set state cause an Unmounted component is never re-rendered])
// 4 - Error Handling Lifecycle 
// (Has 4 Methods - static getDerivedStateFromError | componentDidCatch [This two are implemented in ErrorBoundary.js in error_handling folder])
//
// We will create a child version of this class and make this one the parent to demostrate
// order of Parent and Child lifecycles
// Parent is called LifecycleA // Child is called LifecycleB
// Result Parent is executed up to render(), then all child methods is executed since it was called 
// in render(), then parent last Method is then executed (e.g componentDidMount())
//
// We will log info in each method to see the order of execution
//######################

class LifecycleParent extends Component {

    // Mounting Lifecycle - First Method
    // Here you can initialise state, bind events
    // You musn't do HTTP calls
    // [ Frequently Used ]
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ibrahim'
        }

        //log
        console.log("LifecycleA Mounting &&& Updating Lifecycle - constructor - First Method")
    }

    // Mounting Lifecycle - Second Method &&& Updating Lifecycle - First Method
    // This method - is used when you want some State to depend on the pased in Props and
    // returns the new state
    // Here you can set state
    // You musn't do HTTP calls
    // [ Rarely Used ]
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA - getDerivedStateFromProps - Mounting Lifecycle [Second Method] &&& Updating Lifecycle [First Method]")
        return null;
    }

    // Mounting Lifecycle - Forth Method
    // Here you can initialise state, bind events
    // You can do HTTP calls
    // [ Frequently Used ]
    componentDidMount() {
        console.log("LifecycleA Mounting Lifecycle - componentDidMount - Forth Method")
    }

    //###################### UPDATE Specific

    // Updating Lifecycle - Second Method
    // This method - decides if the component can be updating or not, return true to allow updates
    // [ Rarely Used ]
    shouldComponentUpdate() {
        console.log("LifecycleA Updating Lifecycle - shouldComponentUpdate - Second Method")
        return true;
    }

    // Updating Lifecycle - Forth Method
    // This method - takes in prev States and Props and reads the situation of the DOM before update. You can
    // use it to perform such task as reading the previous position of user before update and setting
    // it as the current position in after update. Returns snapshot to be used in next Method
    // Here you can set state
    // You musn't do HTTP calls
    // [ Rarely Used ]
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA Updating Lifecycle - getSnapshotBeforeUpdate - Forth Method")
        return null;
    }

    // Updating Lifecycle - Fifth Method
    // This method - @snapshot is what is returned from getSnapshotBeforeUpdate
    // Here you can set state
    // You can do HTTP calls - but first compare prev Props and States with new Props and State to see 
    // if there is a change before you make the HTTP call to update anything so as not to be making
    // unwanted calls
    // [ Frequently Used ]
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleA Updating Lifecycle - componentDidUpdate - Fifth Method")

        //to check if prevState has changed // assume there is a state variable "count"
        // if(prevState.count != this.state.count){

        // }
    }

    //######################

    // Just to trigger an Update so Updating Lifecycle can be tested
    clickHandler = ()=>{
        this.setState({
            name: 'Ibrahim Oyetunji'
        })
    }

    // Mounting Lifecycle - Third Method &&& Updating Lifecycle - Third Method
    // You musn't do HTTP calls or interract with DOM
    // [ Frequently Used ]
    render() {

        console.log("LifecycleA - render - Mounting Lifecycle [Third Method] &&& Updating Lifecycle [Third Method]")

        return (
            <div>
                <p>
                    Component Lifecycle Example
                </p>
                <p>
                    Lifecycle Parent - LifecycleA (Check Console for result)
                </p>
                <LifecycleChild />
                {/* Just to trigger an Update so Updating Lifecycle can be tested */}
                <p>
                    Click the button below to change state to trigger an Update so Updating Lifecycle
                    can be tested
                </p>
                <button onClick={this.clickHandler}>Test Updating Lifecycle</button>
            </div>
        )
    }
}

export default LifecycleParent
