import React, { Component } from 'react'

//######################
// Render Props (HOC) Implementation
// Render Props - Helps share common code between many different components
//
// Render Props pass in the function we are shering as a prop to the components that want to use it
//
// There is another feature that can do just what Render Props is doing, that is Higher Oredr Component HOC
//
// In this example, we want to implement a count functionality in ClickCounter.js and HoverCounter.js
// so, instead of writing the counting code in those files (and if we have many others files also counting)
// we just implement those code in this RenderProps and use the code in both ClickCounter.js and HoverCounter.js
//######################

class RenderProp extends Component {

    //constructor to set state
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    //counting function
    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        // pass functions in as props
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default RenderProp
