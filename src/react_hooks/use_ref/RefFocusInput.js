import React, {useEffect, useRef} from 'react'

//######################
// useRef Implementation
//
// useRef helps access Browser DOM nodes directly from Functional Components
// Example of usage is Focusing an input element
//######################

function RefFocusInput() {

    // an inital value must be passed in as param, just make it null
    const inputRef = useRef(null)

    useEffect(() => {
        //focus the input
        //the current here is provided by react
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <p>useRef Implementation</p>
            <p>useRef helps access Browser DOM nodes - Here we are focusing the input element</p>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default RefFocusInput
