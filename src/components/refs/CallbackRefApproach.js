import React, { Component } from 'react'

//######################
// Refs Example - Callback Ref Approach
// Refs help access the Browser DOM.
// There are two ways to implement refs:
// 1 - using CreateRef
// 2 - using Callback Ref (older)
//
// Here - you MUST first check if the ref exist before using it, e.g if (this.cbRef) {this.cbRef.focus()}
//######################

class CallbackRefApproach extends Component {

    constructor(props) {
        super(props)

        //STEP 1
        this.cbRef = null

        //STEP 2
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    // componentDidMount() {
    //     //////////////
    //     //do a focus on the input on page load using ref
    //     //////////////
    //     //STEP - Access the DOM
    //     if (this.cbRef) {
    //         this.cbRef.focus()
    //     }
    // }

    clickHandler = () => {
        //////////////
        //access the input value using ref
        //////////////
        //STEP - Access the DOM
        if (this.cbRef) {
            alert("input value is: " + this.cbRef.value)
        }
    }

    render() {
        return (
            <div>
                <p>Callback Ref Aproach - this example focus (uncomment componentDidMount()) and alert the input value</p>
                {/* STEP 3 */}
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Access Text Value</button>
            </div>
        )
    }
}

export default CallbackRefApproach
