import React from 'react'
import ComponentC from './ComponentC'

//######################
// useContext Implementation
// ComponentA.js is the top parent, check info there
//######################

function ComponentB() {
    return (
        <ComponentC />
    )
}

export default ComponentB
