import React, { Component } from 'react'

//######################
// Passing props to a Class Component Example Implementation
//######################

class PassPropsClass extends Component {

    render() {
        // console.log(this.props);
        return (
            <div>
                <p>
                    CLASS COMPONENT PROP TEST: Programmer's Name is: {this.props.name} Expert in: {this.props.expert}
                </p>
                {/* Passing props of unknown name */}
                {this.props.children}
            </div>
        );
    }

    //######################
    //props destructure example
    // render() {
        
    //     const { name, expert, children } = this.props

    //     return (
    //         <div>
    //             <p>
    //                 CLASS COMPONENT PROP TEST: Programmer's Name is: {name} Expert in: {expert}
    //             </p>
    //             {/* Passing props of unknown name */}
    //             {children}
    //         </div>
    //     );
    // }

}

export default PassPropsClass;
