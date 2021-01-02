import React from 'react'

//######################
// Memo and UseCallback Implementation
//
// Export with memo
//######################

function Count(props) {

    console.log(`Memo & Callback Rendering - ${props.text}`)

    return (
        <div>
            {props.text} - {props.count}
        </div>
    )
}

export default React.memo(Count)
