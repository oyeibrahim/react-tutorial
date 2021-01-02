import { useState } from 'react'

//######################
// Custom Hook Creation Implementation (Third created in this tutorial)
//
// RULE - any custom hook MUST start with "use" e.g useDocumetTitle
//
// This custom hook help handle input
//######################

function useInput(initialValue) {

    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    //object
    const bind = {
        //ES6 shorthand for (value: value)
        value,
        //function
        onChange: (e) => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput
