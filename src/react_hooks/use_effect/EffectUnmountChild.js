import React, { useState, useEffect } from 'react'

//######################
// useEffect as - componentWillUnmount
//
// componentWillUnmount will be the place to cleanup all event listeners in the unmounted component
//
// To do this, pass a second return statement in the useEffect, and implement the cleanup code 
// in the return statement
//
// We imlement this using two files, EffectUnmountChild and EffectUnmountParent. The parent has a button
// that can remove the child component and show how the unmounting code works
//######################

function EffectUnmountChild() {

    const [mousePosInfo, setMousePosInfo] = useState("")

    const mouseOverUpdate = () => {
        // console.log("Mouse Over Event")
        setMousePosInfo("Mouse Over Detected")
    }

    const mouseOutUpdate = () => {
        // console.log("Mouse Out")
        setMousePosInfo("Mouse Out")
    }

    //To use componentWillUnmount functionality, pass a return statement to the useEffect
    useEffect(() => {
        console.log("useEffect Called from EffectUnmountChild.js")
        //this is a JavaScript specific function
        window.addEventListener("mouseover", mouseOverUpdate)
        window.addEventListener("mouseout", mouseOutUpdate)

        //componentWillUnmount cleanup code //Remove the mousemove event listener when unmounted
        return () => {
            console.log("Component Unmounting code")
            window.removeEventListener("mouseover", mouseOverUpdate)
            window.removeEventListener("mouseout", mouseOutUpdate)
        }
    }, [])

    return (
        <div>
            <p>Moving mouse out of this page detects MouseOut</p>
            <p>Mouse Position Info: {mousePosInfo}</p>
        </div>
    )
}

export default EffectUnmountChild
