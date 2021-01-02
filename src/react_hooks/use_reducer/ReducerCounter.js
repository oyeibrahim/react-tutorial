import React, { useReducer } from 'react'

//######################
// useReducer Implementation
//
// useReducer does the same thing as useState - allows usage of State feature in Functional Component
// But useReducer has another approach to implementing a state
// useReducer is used underneath to build useState, so useReducer is like primitive
//
// To use useReducer, create the reducer method and pass it into useReducer
//######################

//define initialState and reducer here
const initialState = 0

//do the counter operation in reducer
const reducer = (state, action) => {
    switch (action) {

        case 'increment':
            return state + 1

        case 'decrement':
            return state - 1

        case 'reset':
            return initialState

        default:
            return state
    }
}


function ReducerCounter() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>UseReducer Implementation</p>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ReducerCounter
