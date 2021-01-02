import React, {useState} from 'react'

//######################
// useState Implementation
//
// useState allows usage of State feature in Functional Component
//
// First import the fuction
// the function is useState(initial state) and takes the initial state of the state as parameter
// then returns the state and the function for changing the state
//
// useState parameter can be aString, Number, Object, Array, or any other
//
//Better way to imlement this kind of counter is using the previous state implementation in CounterWithPrevState.js
//######################

function StateCounter() {

    //returns count and function incrementCount
    //@param - initial state is 0
    const [count, incrementCount] = useState(0);

    return (
        <div>
            <p>UseState Implementation - the counter below is implemented with UseState</p>
            {/* implement the incrementCount function here */}
            <button onClick={() => incrementCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default StateCounter
