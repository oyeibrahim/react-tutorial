import React, { Component } from 'react'
import ComponentC from './ComponentC'
import InfoContext from './infoContext'

//######################
// Context Implementation
// ComponentA.js is the top parent, check info there
//######################

class ComponentB extends Component {

    // Using the second method, check ComponentA.js - We can declare like this or like the below
    static contextType = InfoContext

    render() {
        return (
            <div>
                <ComponentC />
                <p>In Component B (Second Method) - Info passed in: {this.context}</p>
            </div>
        )
    }
}

// Using the second method, check ComponentA.js - We can declare like this or like the above
// ComponentB.contextType = InfoContext

export default ComponentB
