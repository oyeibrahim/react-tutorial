import React, { useState, useMemo } from 'react'

//######################
// useMemo Implementation
//
// useMemo is used to prevent a function that hasn't changed from re-executing on update. Default is 
// that all functions in a component are re-executed on every update even if they are not required. 
// so useMemo and useCallback help prevent this.
//
// useMemo caches the return value of the function, so when an update occurs and the function isn't 
// affected, then the cached value is returned instead of the function executing again
//
// useMemo accept the function as first param and the variable used by the function as second 
// param
// So if the variable depended on change, the function will be executed, but if not, the function 
// won't be executed, only the cached return value of the function will be returned.
//
// NOTE - useCallback caches the Function ////// useMemo caches the return value of the function 
// for useCallback see memo_and_callback/ParentCompMandC.js
// both useCallback and useMemo are almost same except for what they cache
// Difference: Whenever you need to cache the function use useCallback but if its the return value you
// need to cache the use useMemo
//
// In this example, counterOne needs the isEven method, but counterTwo doesn't. We purposedly make
// isEven method slow but counting an unnecessary while loop. By default if counterOne is changed, the
// isEven method is executed (as expected) and the result will slow down the UI re-render BUT also
// if counterTwo is changed, the UI re-render will be slow too and isEven will be executed in the 
// background.
// So, to prevent isEven execution when it is not needed like when counterTwo is changed, we will use
// useMemo on it so the the last return value is cached and returned without the method being executed
// when the method is not needed.
//######################

function MemoCounter() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    //useMemo in action 
    //first param is the function //second param is the variable the function depends on
    const isEven = useMemo(() => {
        //to slow it down
        let i = 0
        while (i < 2000000000) i++
        //the real return
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <p>useMemo Implementation</p>
            <p>The first button is slow and shouldn't affect the second button's speed</p>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count One - {counterTwo}</button>
            </div>
        </div>
    )
}

export default MemoCounter
