import React from 'react'
import useCounter from './useCounter'

//######################
// This component use the useCounter custom hook
//
// This hook is more complex as it takes values and return values
// This component uses 0 as initialState and 1 as increment & decrement as passed in the param to
// the useCounter custom hook
//######################

function CounterHookUsage1() {

    //call the hook and get the return values
    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (
        <div>
            <p>Custom Hook Imlementaton - useCounter custom hook</p>
            <p>Count - {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHookUsage1
