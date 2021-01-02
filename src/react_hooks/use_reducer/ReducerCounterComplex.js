import React, { useReducer } from 'react'

//######################
// useReducer with Complex State and Action Implementation
//
// This means that the state and action will be object instead of just single variable as in ReducerCounter.js
//
// Benefit is that you can maintain many states and action in one useReducer implementation
// We will do two count at once in this example
//
// IMPORTANT - When the behaviour of the states and action you want to implement is the same such that
// they can share the same reducer function, then ReducerCounterMultiple.js is a
// better implementation of this example
//######################

//define initialState and reducer here (as object)
const initialState = {
    firstCount: 0,
    secondCount: 10
}

//do the counter operation in reducer
//since action is now an object, we pass in the value we want to increment or decrement with 
//through action.value
const reducer = (state, action) => {
    switch (action.type) {

        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value }

        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value }

        case 'increment_second':
            return { ...state, secondCount: state.secondCount + action.value }

        case 'decrement_second':
            return { ...state, secondCount: state.secondCount - action.value }

        case 'reset':
            return initialState

        default:
            return state
    }
}

function ReducerCounterComplex() {
    
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>useReducer with Complex State and Action Implementation</p>
            <div>
                <p>First Count: {count.firstCount}</p>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement5</button>
            </div>
            <div>
                <p>Second Count: {count.secondCount}</p>
                <button onClick={() => dispatch({ type: 'increment_second', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement_second', value: 1 })}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}

export default ReducerCounterComplex
