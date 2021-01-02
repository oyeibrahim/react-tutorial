import React, { Component } from 'react'

//######################
// Regular Component Class.
//######################

class RegularComponentPCD extends Component {
    render() {

        console.log("Regular Component PCD render()")
        
        return (
            <div>
                <p>This is a Regular Component - name is: {this.props.name}</p>
            </div>
        )
    }
}

export default RegularComponentPCD
