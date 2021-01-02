import React, { useContext } from 'react'
import { InfoContext } from './infoContext'

//######################
// useContext Implementation
// ComponentA.js is the top parent, check info there
//
// To use Hook useContext, just call the method
//######################

function ComponentC() {
    
    const name = useContext(InfoContext)

    return (
        <div>
            <p>useContext Implementation</p>
            <p>
                Context - making info available in all components automatically without using
                the normal props passing method
            </p>
            <p>In Component C - Info passed in: {name}</p>
        </div>
    )
}

export default ComponentC
