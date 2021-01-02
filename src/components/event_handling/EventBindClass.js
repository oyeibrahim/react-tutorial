import React, { Component } from 'react'

//######################
// Event Binding in Class Component Example Implementation
//######################

class EventBindClass extends Component {

    constructor() {
        //call super class
        super();

        this.state = {
            message: "Welcome Visitor This is an Event Binding Example",
        };

        //third and best case for event binding, check the render method below
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: "Event Binding Success. Thanks for clicking the button"
        })
        console.log(this)
    }

    //fourth case for event binding, I only changed the name so it can be unique on its own
    clickHandler4thCase = () => {
        this.setState({
            message: "Event Binding Success. Thanks for clicking the button"
        })
        console.log(this)
    }

    render() {

        return (
            <div>
                <p>
                    CLASS COMPONENT EVENT BINDING: message: {this.state.message}
                </p>
                {/* If you don't use a function and use just onClick={this.clickHandler} */}
                {/* Then error will be thrown as "this" is undefined in an event handler */}
                {/* by default in JavaScript. Check StateExampleClass.js as reference */}
                {/* All methods to bypass this error and their pros and cons stated below */}

                {/* ERROR - without puting the "this" reference in the constructor */}
                {/* <button onClick={this.clickHandler}>Change Message Using Event Binding</button> */}

                {/* GOOD but every update to the state causes the component to re-render */}
                {/* also generate a brand new event handler on every render */}
                {/* this can work nice in small application but can be severe in large scale application */}
                {/* or if there are many nested children components */}
                <button onClick={this.clickHandler.bind(this)}>Change Message Using Event Binding case1</button>

                &nbsp;

                {/* GOOD used in StateExampleClass.js also has performance issues on large project */}
                {/* or if there are many nested children components */}
                {/* This is he BEST approach if you want to pass in parameters to the method */}
                {/* So if the code requires passing in parameters to this method isn't so large and */}
                {/* doesn't have nested children component then this will be the BEST option to use */}
                <button onClick={() => this.clickHandler()}>Change Message Using Event Binding case2</button>

                &nbsp;

                {/* BEST also recommended by official React Documentation and the most common approach */}
                {/* FIRST put "this" reference in the constructor above by placing commented code below */}
                {/*  in the constructor: */}
                {/* this.clickHandler = this.clickHandler.bind(this); */}
                {/* the binding only happens once in the constructor so this method has no performance issue */}
                <button onClick={this.clickHandler}>Change Message Using Event Binding case3 (BEST)</button>

                &nbsp;

                {/* BEST also recommended by official React Documentation */}
                {/* Use arrow function to define the method as in function clickHandler4thCase() above */}
                {/* then call the function for event binding below */}
                {/* I only changed the name of the method so it can be unique on its own */}
                <button onClick={this.clickHandler4thCase}>Change Message Using Event Binding case4 (BEST)</button>
            </div>
        );
    }

}

export default EventBindClass;
