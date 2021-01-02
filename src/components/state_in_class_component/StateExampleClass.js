import React, { Component } from 'react'

//######################
// Using State a Class Component Example Implementation
//######################

class StateExampleClass extends Component {

    constructor() {
        //call super class
        super();

        //create the state object
        this.state = {
            message: "Welcome Visitor",
            count: 0
        };
    }

    //######################
    //used to change a state
    //called in button click event below to change message state text
    changeMessage() {
        this.setState({
            message: "Thanks for clicking the button"
        })
    }

    //######################
    incrementCount() {

        //this method will only increment the state in backend but will not re-render the UI so
        //it won't show on the page
        // this.state.count = this.state.count + 1;

        //setState will update and re-render but is async so if we console log or use a variable
        //we change in setState outside of the setState then it won't use updated state of the 
        //variable but the previous state.
        //to use the variable you MUST pass in a callback function
        this.setState({
            count: this.state.count + 1
        }, () => console.log("callback value: " + this.state.count))

        //this console log outside setState will print previous value of the variable
        // console.log(this.state.count)
    }

    //######################
    //this setState uses the previous state of the object
    //this is useful when you want to make call setState multiple times like in incrementFive below, because 
    //if we didn't use preState multiple call will only do one call multiple times and won't increment as expected
    incrementCountUsingPrev() {

        //to use previous state pass in a function to the setState
        //prevState and props are the parameters, props is demonstrated in below method
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

    }

    //######################
    //this setState uses the previous state of the object and props in case the state change depend on props passed in
    incrementCountUsingPrevAndProps() {

        //to use previous state pass in a function to the setState
        //props.value assume the name of the prop is "value"
        this.setState((prevState, props) => ({
            count: prevState.count + props.value
        }))

    }

    //######################
    incrementFive() {
        this.incrementCountUsingPrev();
        this.incrementCountUsingPrev();
        this.incrementCountUsingPrev();
        this.incrementCountUsingPrev();
        this.incrementCountUsingPrev();
    }

    render() {

        // State can be destructured.
        // after destructuring the state you can just use {value} instead of this.state.{value}
        // How to destructure:
        // const {count} = this.state;


        return (
            <div>
                <p>
                    CLASS COMPONENT STATE TEST: message: {this.state.message}
                </p>
                {/* If you don't use a function and use just onClick={this.changeMessage} without */}
                {/* putting the "this" reference in the constructor */}
                {/* Then error will be thrown as "this" is undefined in an event handler */}
                {/* by default in JavaScript. To bypass this error, check example in EventBindClass.js */}

                {/* NOTE - this is not the best way to do event handling, check EventBindClass.js */}
                <button onClick={() => this.changeMessage()}>Change Message</button>
                {/* For destructured just use {count} instead of {this.state.count} below */}
                <p>
                    CLASS COMPONENT STATE MORE TEST: count - ({this.state.count})
                </p>
                <button onClick={() => this.incrementCount()}>Increment Count</button>
                &nbsp;
                <button onClick={() => this.incrementFive()}>Increment By 5</button>
            </div>
        );

        //######################
        //state destructure example

        // const { message, count } = this.state

        // return (
        //     <div>
        //         <p>
        //             CLASS COMPONENT STATE TEST: message: {message}
        //         </p>
        //         <button onClick={() => this.changeMessage()}>Change Message</button>
        //         <p>
        //             CLASS COMPONENT STATE MORE TEST: count - ({count})
        //         </p>
        //         <button onClick={() => this.incrementCount()}>Increment Count</button>
        //         &nbsp;
        //         <button onClick={() => this.incrementFive()}>Increment By 5</button>
        //     </div>
        // );
        //######################
    }

}

export default StateExampleClass;
