import React, { useState, useEffect } from 'react'

//######################
// Execution useEffect only once (make it just like - componentDidMount)
//
// This will not make useEffect re-render at all on updates. It will only execute once when 
// the page loads - componentDidMount
//
// To do this, pass a second parameter to useEffect, this time an empty array.
//
// When using empty array second param, be sure that the useEffect is not meant to update in any 
// way, if it is to update just pass in the updating variable(s) to the array as in 
// EffectCounterConditional.js
//
// The example tells the current mouse position
//######################

function EffectOnlyOnce() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e)=>{
        // console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    //To execute only once, just pass an empty array as second param
    useEffect(() => {
        console.log("useEffect Called from EffectOnlyOnce.js")
        //this is a JavaScript specific function
        window.addEventListener("mousemove", logMousePosition)
    }, [])

    return (
        <div>
            <p>Execute UseEffect only once when page loads to make it be componentDidMount()</p>
            <p>Mouse Position: X - {x} Y - {y}</p>
        </div>
    )
}

export default EffectOnlyOnce
