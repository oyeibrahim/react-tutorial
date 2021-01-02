import React, { useState, useEffect } from 'react'

//######################
// Conditional useEffect Implementation
//
// Implements execution of useEffect only when a variable changes. This prevents the default behavior
// of execution on all re-render even when not neccessary
//
// In this example, we execute useEffect only when "count" changes and won't execute when "name" changes
//
// To do this, pass a second parameter to useEffect, it will be an array of names of all props and state
// that when changed the useEffect should execute
//######################

function EffectCounterConditional() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    //pass in second param, that is an array of props and state that when changed all code in the 
    //useEffect should execute
    useEffect(() => {
        // console.log("Count Changed")
        // document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <p>Conditional UseEffect Implementation</p>
            <p>Changing count prints to console and changes page title but changing input doesn't</p>
            <p>Uncomment the useEffect code to see how it works</p>
            <input
                type='text'
                value={name}
                // using spread operator
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default EffectCounterConditional
