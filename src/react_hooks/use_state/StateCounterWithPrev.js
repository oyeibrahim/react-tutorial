import React, { useState } from 'react'

//######################
// useState using Previous State Implementation
//######################

function StateCounterWithPrev() {

    const initialState = 0

    const [count, setCount] = useState(initialState)

    const incrementFive = () => {
        //call the setCount function five times to increment by 5
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <p>UseState using Previous State</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default StateCounterWithPrev
