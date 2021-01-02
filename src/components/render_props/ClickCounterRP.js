import React, { Component } from 'react'

//######################
// Made an HOC with counting functionalities through withEnhancer.js
//######################

class ClickCounterRP extends Component {
    render() {
        return (
            <button onClick={this.props.incrementCount}>
                Clicked {this.props.count} times
            </button>
        )
    }
}

export default ClickCounterRP
