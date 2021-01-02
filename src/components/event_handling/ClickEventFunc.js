// import React from 'react'

//######################
// Click Event Handler Implementation Example in Functional Component
//######################

function clickHandler() {
    console.log("Click Detected");
}

function ClickEventFunc() {
    return (
        <div>
            <p>Click Event Handling With FUNCTIONAL COMPONENT Example</p>
            {/* Don't call with parenthesis e.g clickHandler() as this will auto call it in begining */}
            {/* and won't be callable again. So never put parenthesis in front */}
            <button onClick={clickHandler}>Grab Click Event</button>
        </div>
    )
}

export default ClickEventFunc
