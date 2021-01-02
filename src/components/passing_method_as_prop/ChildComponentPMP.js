// import React from 'react'

//######################
// Communicate between Two Components and Passing in Method as props
// This is child component and is made a Functional Component because we don't to maintain a State in it
//######################

function ChildComponentPMP(props) {
    // The props can be also destructured, check passing_props folder for props destructuring example
    return (
        <div>
            <p>Methods as Props between two Components. Click the buttons to test</p>

            <button onClick={props.gParentHandler}>Greet Parent Alert</button>

            &nbsp;

            {/* Check event_handling for this type of event handler */}
            <button onClick={() => props.gChildHandler("Child")}>Greet Child Alert (Uses parameter)</button>
        </div>
    )
}

export default ChildComponentPMP
