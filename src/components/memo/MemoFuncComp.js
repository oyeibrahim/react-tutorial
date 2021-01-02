import React from 'react'

//######################
// To make a Functional Component a Memo, export it as React.memo(name)
// This will make it a Higher Order Component with Pure Component features
//######################

function MemoFuncComp(props) {

    console.log("Functional Component Memo")

    return (
        < div >
            <p>This is the Functional Memo Component - name is: {props.name}</p>
        </div >
    )
}

export default React.memo(MemoFuncComp)
