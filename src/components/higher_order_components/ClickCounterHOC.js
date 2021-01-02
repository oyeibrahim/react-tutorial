import React, { Component } from 'react'
import withEnhancer from './withEnhancer'

//######################
// Made an HOC with counting functionalities through withEnhancer.js
//######################

class ClickCounterHOC extends Component {
    render() {
        return (
            <button onClick={this.props.incrementCount}>
                {this.props.name} Clicked {this.props.count} times
            </button>
        )
    }
}

// check withEnhancer to see the params to pass in
export default withEnhancer(ClickCounterHOC, 2)
