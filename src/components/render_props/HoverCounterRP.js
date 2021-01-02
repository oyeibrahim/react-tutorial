import React, { Component } from 'react'

//######################
// Made an HOC with counting functionalities through withEnhancer.js
//######################

export class HoverCounterRP extends Component {
    render() {
        return (
            <p onMouseOver={this.props.incrementCount}>
                Hovered {this.props.count} times
            </p>
        )
    }
}

export default HoverCounterRP
