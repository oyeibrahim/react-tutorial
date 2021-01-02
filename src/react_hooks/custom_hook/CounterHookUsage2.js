import React from 'react'
import useCounter from './useCounter'

//######################
// This component use the useCounter custom hook
//
// This hook is more complex as it takes values and return values
// This component uses 10 as initialState and 10 as increment & decrement as passed in the param to
// the useCounter custom hook
//######################

function CounterHookUsage2() {

    //call the hook and get the return values
    const [count, increment, decrement, reset] = useCounter(10, 10)

    return (
        <div>
            <p>Count - {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHookUsage2
