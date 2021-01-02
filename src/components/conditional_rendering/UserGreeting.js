import React, { Component } from 'react'

//######################
// Demonstratehow to render a UI element based on condition
// There are 4 ways to acheive this:
// 1 - using if/else
// 2 - using variable
// 3 - using ternary operator
// 4 - using short circuit operator (will display nothing for "else" condition)
//######################

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            explanation: 'Conditional Rendering - The below will show "Welcome User" if isLoggedIn is true else it will show "Welcome Guest"'
        }
    }

    render() {

        //######################
        // 1 - Using if/else
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <p>{this.state.explanation}</p>
        //             <p>Wlecome User</p>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <p>{this.state.explanation}</p>
        //             <p>Wlecome Guest</p>
        //         </div>
        //     )
        // }
        //######################

        //######################
        // 2 - Using variable
        // let dMessage;
        // if (this.state.isLoggedIn) {
        //     dMessage = <div>
        //         <p>{this.state.explanation}</p>
        //         <p>Wlecome User</p>
        //     </div>
        // } else {
        //     dMessage = <div>
        //         <p>{this.state.explanation}</p>
        //         <p>Wlecome Guest</p>
        //     </div>
        // }

        // return dMessage;
        //######################

        //######################
        // 3 - Using ternary operator
        return this.state.isLoggedIn ?
            (
                <div>
                    <p>{this.state.explanation}</p>
                    <p>Wlecome User</p>
                </div>
            ) : (
                <div>
                    <p>{this.state.explanation}</p>
                    <p>Wlecome Guest</p>
                </div>
            )
        //######################

        //######################
        // 4 - Using short circuit operator (will display nothing for "else" condition)
        // return this.state.isLoggedIn &&
        //     <div>
        //         <p>{this.state.explanation}</p>
        //         <p>Wlecome User</p>
        //     </div>
        //######################
    }
}

export default UserGreeting
