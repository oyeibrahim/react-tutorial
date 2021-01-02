import React, { Component } from 'react'

//######################
// Refs Example - createRef Approach
// Refs help access the Browser DOM.
// There are two ways to implement refs:
// 1 - using CreateRef
// 2 - using Callback Ref (older)
//######################

class CreateRefApproach extends Component {

    constructor(props) {
        super(props)

        //STEP 1
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        //////////////
        //do a focus on the input on page load using ref
        //////////////
        //STEP - Access the DOM
        this.inputRef.current.focus()

        //to see all references
        console.log(this.inputRef)
    }

    clickHandler = () => {
        //////////////
        //access the input value using ref
        //////////////
        //STEP - Access the DOM
        alert("input value is: " + this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <p>Refs Example</p>
                <p>Create Ref Aproach - this example focus and alert the input value</p>
                {/* STEP 2 */}
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler}>Access Text Value</button>
            </div>
        )
    }
}

export default CreateRefApproach
