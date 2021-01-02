import React, { useState, useEffect, useRef } from 'react'

//######################
// Second useRef Implementation
//
// This example is a Timer implementation
// useRef here is used to store the value of the interval so that it can be cleared from the button in 
// the JSX. If useRef wasn't used to save the interval, then the button won't be able to access the 
// interval variable as it is only accessible in useEffect.
// So useRef can be used to save variables that are only scoped to a function and then the variable 
// will tbe accessible in the whole component and this won't cause any performance issue
// use the useRef variable as (.current) e.g in this example, since the variable is intervalRef we use
// it as (intervalRef.current)
//######################

function RefTimer() {

    const [timer, setTimer] = useState(0)

    //call useRef
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <p>Another useRef Implementation</p>
            <p>Timer example</p>
            <p>Hook Timer - {timer}</p>
            {/* Since we use useRef to store the variable, the interval variable is now */}
            {/* accessible here and can be operated on here. If we didn't use useRef, */}
            {/* it will only be accessible in useEffect */}
            <button onClick={() => { clearInterval(intervalRef.current) }}>Clear Timer</button>
        </div>
    )
}

export default RefTimer
