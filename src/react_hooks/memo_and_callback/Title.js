import React from 'react'

//######################
// Memo and UseCallback Implementation
//
// Export with memo
//######################

function Title(props) {

    console.log(`Memo & Callback Rendering Title`)

    return (
        <div>
            <p>Memo and useCallback Implementation</p>
            <p>
                On re-render, we want only affected componens to re-render. The components re-rendered
                are printed on the console
            </p>
        </div>
    )
}

export default React.memo(Title)
