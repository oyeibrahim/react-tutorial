import React, { Component } from 'react'

//######################
// Click Event Handler Implementation Example in Class Component
//######################

class ClickEventClass extends Component {

    clickHandler() {
        console.log("Click Detected");
    }

    render() {
        return (
            <div>
                <p>Click Event Handling With CLASS COMPONENT Example</p>
                {/* Don't call with parenthesis e.g clickHandler() as this will auto call it in begining */}
                {/* and won't be callable again and in case of state change detection, will continue to */}
                {/* auto-print with new state change indefinitely until the app crashes. */}
                {/* So never put parenthesis in front */}
                <button onClick={this.clickHandler}>Grab Click Event</button>
            </div>
        )
    }
}

export default ClickEventClass
