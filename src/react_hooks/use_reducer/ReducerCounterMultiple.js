import React, { useReducer } from 'react'

//######################
// Implementation of Multiple useReducer.
//
// Better version of ReducerCounterComplex.js when the behaviour of the state and action is the same
// such that they all can use same reducer
//
// NOTE -  we can also just create multiple reducers if the behaviour is different
//
// We will create two independent counters
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


function ReducerCounterMultiple() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Multiple UseReducer Implementation</p>
            {/* First counter */}
            <div>
                <p>First Count: {count}</p>
                <button onClick={() => dispatch('reset')}>Reset</button>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
            </div>
            {/* Second counter */}
            <div>
                <p>Second Count: {countTwo}</p>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            </div>
        </div>
    )
}

export default ReducerCounterMultiple
