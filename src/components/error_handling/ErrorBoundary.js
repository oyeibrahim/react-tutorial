import React, { Component } from 'react'

//######################
// ErrorBoundary Implementation
// ErrorBoundary - are React components that catches error in there child component and log them
// and/or display a fallback UI. They are error handlers
// After creating an ErrorBoundary, we wrap it around a child element we want to detect error 
// in, so ErrorBoundary acts like a parent and only display the child if there is no error
// else it display the fallback UI
//
// in Development the error will still show on the page even after using ErrorBoundary, to view 
// the fallback UI of the ErrorBoundary just click the "close" icon on the top right of the screen
//
// A class component becomes an ErrorBoundary by implementing either or both of the error lifecycle
// methods: static getDerivedStateFromError | componentDidCatch
//
// ErrorBoundary only catches error in the application, like in constructor, render and other application
// methods BUT doesn't catch error in custom defined method like Event Handlers, to catch such error, 
// use normal JavaScript try and catch.
//
// static getDerivedStateFromError - is used to render a fallback UI
// componentDidCatch - is used to logthe error information
//######################

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        //create a state to keep track of error
        this.state = {
            hasError: false
        }
    }

    //detect error
    //takes error as param
    static getDerivedStateFromError(error) {
        //change the state to notify error already exist
        return {
            hasError: true
        }
    }

    //log error
    //takes error and info as the param
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        //if error then display the fallback UI
        if (this.state.hasError) {
            return <p>There is an error with this element</p>
        }

        //if no error then display the element (the child component)
        return this.props.children
    }
}

export default ErrorBoundary
