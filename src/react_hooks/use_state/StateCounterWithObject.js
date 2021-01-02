import React, { useState } from 'react'

//######################
// useState using Object param Implementation
//
// IMPORTANT - when object is used, the setState of useState hook doesn't automatically merge the object
// when one the the object value is being used, so if their are two objects vau firstname and lastname
// as below, when we are updating firstname, lastname will be removed from the state and when we are
// updating lastname, firstname wil be removed.
// SOLUTION - manually merge the object when setting the function that controls the state update by using
// the spread oprator as implemented below
//######################

function StateCounterWithObject() {

    //using object as @param
    const [name, setName] = useState({ firstname: '', lastname: '' })

    return (
        <div>
            <p>UseState using Object Param</p>
            <p>
                Typing in the box will update the value. The state print is to see what the current state
                is, especially when not using spread operator
            </p>
            <form>
                <input
                    type='text'
                    value={name.firstname}
                    // using spread operator
                    onChange={(e) => setName({ ...name, firstname: e.target.value })}
                />
                <input
                    type='text'
                    value={name.lastname}
                    // using spread operator
                    onChange={(e) => setName({ ...name, lastname: e.target.value })}
                />
                <p>Your firstname is - {name.firstname}</p>
                <p>Your lastname is - {name.lastname}</p>
                <p>State is: {JSON.stringify(name)}</p>
            </form>
        </div>
    )
}

export default StateCounterWithObject
