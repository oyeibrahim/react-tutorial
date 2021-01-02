import React from 'react'

//######################
// This Fuctional Component just provide a UI and throws an error for some action
// It is just to test the ErrorBoundary
//######################

function UiDisplayEH(props) {

    //Just list render the name passed in through props, if the name is React, then throw
    //error saying - Not a Programming Language!

    if(props.name === "React"){
        throw new Error("Not a Programming Language!")
    }

    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}

export default UiDisplayEH
