import { useState } from 'react'

//######################
// Custom Hook Creation Implementation (Second created in this tutorial)
//
// More complex, uses the param passed in to set the values and show that different values 
// can come in from different components using this custom hook and each one will work fine
// Also this custom hook shows how to return value and ge the value from the components that
// call the custom hook
//
// It is possible to create custom hooks in React, this will make shareable code be implemented 
// only once and used in as any component that need it
//
// RULE - any custom hook MUST start with "use" e.g useDocumetTitle
//
// Here we are creating a counter
//######################

function useCounter(initialCount = 0, value) {

    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    //values returned by this custom hook
    return [count, increment, decrement, reset]
}

export default useCounter
