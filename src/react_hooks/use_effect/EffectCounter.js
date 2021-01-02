import React, { useState, useEffect } from 'react'

//######################
// useEffect Implementation
//
// useEffect represent componentDidMount, componentDidUpdate, componentWillUnmount. So it is the 
// place to cause side effect. The logic is that it is executed on every render and since the lifecycle
// above are also executed on every render, then it will do what they do.
// NOTE - other examples will implement how to use useEffect only as componentDidMount or 
// componentDidUpdate or componentWillUnmount or just to execute it based on condition or 
// to execute it once so it doesn't affect performance. Because in some cases, making it executed 
// on every render may cause performance issue or you may just not the the default executed on every
// render style.
//
// Since it is the place to cause side effects, you do HTTP request in it
//
// First import the fuction
// the function is useEffect(parameter) the parameter is the function that you want to get execued
//
// Multiple useEffect can be used in a component
//######################

function EffectCounter() {

    const [count, setCount] = useState(0)

    //uncomment to see how it changes the page title
    useEffect(() => {
        //we are setting the page title to number of clicks
        // document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>UseEffect Implementation</p>
            <p>Uncomment the useEffect code to see how it changes the page title</p>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default EffectCounter
