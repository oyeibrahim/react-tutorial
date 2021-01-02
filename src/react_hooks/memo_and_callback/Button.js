import React from 'react'

//######################
// Memo and UseCallback Implementation
//
// Export with memo
//######################

function Button(props) {

    console.log(`Memo & Callback Rendering button - ${props.children}`)

    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    )
}

export default React.memo(Button)
