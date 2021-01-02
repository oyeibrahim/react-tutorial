import React, { Component } from 'react'
import withEnhancer from './withEnhancer'

//######################
// Made an HOC with counting functionalities through withEnhancer.js
//######################

export class HoverCounterHOC extends Component {
    render() {
        return (
            <p onMouseOver={this.props.incrementCount}>
                {this.props.name} Hovered {this.props.count} times
            </p>
        )
    }
}

// check withEnhancer to see the params to pass in
export default withEnhancer(HoverCounterHOC, 1)
